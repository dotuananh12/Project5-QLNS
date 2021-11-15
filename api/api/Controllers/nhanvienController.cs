using api.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class nhanvienController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public nhanvienController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        vd3Context db = new vd3Context();
        // GET: api/<nhanvienController>
        //[HttpGet]
        //public IActionResult Get()
        //{
        //    return Ok(db.NhanViens.ToList());
        //}
        [HttpGet]
        public IActionResult Get()
        {
            var result = from t1 in db.NhanViens
                         join t2 in db.TrangThais on t1.Trangthai equals t2.Id
                         join t3 in db.PhongBans on t1.Maphongban equals t3.Id
                         join t4 in db.ChucVus on t1.Machucvu equals t4.Id
                         select new
                         {
                             t1.Id,
                             t1.Hoten,
                             t1.Hosonhanvien,
                             t1.Trangthai,
                             t1.Img,
                             t1.Maphongban,
                             t1.Machucvu,
                             t1.Mahesoluong,
                             t1.kyhieunv,
                             //
                             t2.Tentrangthai,
                             t3.Ten,
                             t4.Tenchucvu,
                         };
            return Ok(result.ToList());
        }

        // GET api/<nhanvienController>/5
        [Route("getbyid/{id}")]
        [HttpGet]
        public IActionResult Get(int id)
        {
            var data = db.NhanViens.SingleOrDefault(x => x.Id == id);
            return Ok(data);
        }

        // POST api/<nhanvienController>
        [HttpPost]
        public JsonResult Post([FromBody] NhanVien c)
        {
            //c.CreatedDate = DateTime.Now;
            //c.CreatedBy = "ngoc dz";
            db.NhanViens.Add(c);
            db.SaveChanges();
            return new JsonResult("add succesfull");
        }

        // PUT api/<nhanvienController>/5
        [HttpPut]
        public JsonResult Put(NhanVien sua)
        {
            var data = db.NhanViens.Update(sua);
            db.SaveChanges();
            return new JsonResult("cập nhật thành công");
        }

        // DELETE api/<nhanvienController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            NhanVien ca = db.NhanViens.FirstOrDefault(x => x.Id == id);
            db.NhanViens.Remove(ca);
            db.SaveChanges();
            return new JsonResult("xóa thành công");
        }
        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {

                return new JsonResult("anonymous.jpg");
            }
        }
        [Route("gettrangthai")]
        [HttpGet]
        public IActionResult GettrangthaiName()
        {
            return Ok(db.TrangThais.ToList());
        }
        [Route("getphongban")]
        [HttpGet]
        public IActionResult Getmaphongban()
        {
            return Ok(db.PhongBans.ToList());
        }
        [Route("getchucvu")]
        [HttpGet]
        public IActionResult Getchucvu()
        {
            return Ok(db.ChucVus.ToList());
        }
        [Route("gethsnv")]
        [HttpGet]
        public IActionResult Gethosonhanvien()
        {
            return Ok(db.HoSoNhanViens.ToList());
        }
        [Route("gethsl")]
        [HttpGet]
        public IActionResult Gethsl()
        {
            return Ok(db.HeSoLuongs.ToList());
        }
        [Route("geths/{hosonhanvien}")]
        [HttpGet]
        public IActionResult Gethsnv(int hosonhanvien)
        {
            var hs = db.HoSoNhanViens.SingleOrDefault(x =>x.Id==hosonhanvien);
            return Ok(hs);
        }
        [Route("getctcv/{machucvu}")]
        [HttpGet]
        public IActionResult Getctcv(int machucvu)
        {
            var cvu = db.ChucVus.SingleOrDefault(x => x.Id == machucvu);
            return Ok(cvu);
        }
        [Route("getctpb/{maphongban}")]
        [HttpGet]
        public IActionResult Getctpb(int maphongban)
        {
            var pbn = db.PhongBans.SingleOrDefault(x => x.Id == maphongban);
            return Ok(pbn);
        }
    }
}
