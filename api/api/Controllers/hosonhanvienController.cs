using api.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class hosonhanvienController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public hosonhanvienController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        vd3Context db = new vd3Context();
        // GET: api/<hosonhanvienController>
        [HttpGet]
        public IActionResult Get()
        {
            var result = from t1 in db.HoSoNhanViens
                         join t2 in db.NhanViens on t1.kyhieunv equals t2.kyhieunv
                  
                         select new
                         {
                             t1.Id,
                             t1.Cmt,
                             t1.Phone,
                             t1.Ngaycapnhat,
                             t1.Gioitinh,
                             t1.Ngaysinh,
                             t1.Quequan,
                             t1.Email,
                             t1.Trinhdohocvan,
                             t1.Ngoaingu,
                             t1.Ngaybatdau,
                             t1.kyhieunv,
                             //
                             t2.Hoten,                  
                         };
            return Ok(result.ToList());
        }

        // GET api/<hosonhanvienController>/5
        [Route("{id}")]
        [HttpGet]
        public IActionResult Get(int id)
        {
            var data = db.HoSoNhanViens.SingleOrDefault(x => x.Id == id);
            return Ok(data);
        }

        // POST api/<hosonhanvienController>
        [HttpPost]
        public JsonResult Post([FromBody] HoSoNhanVien c)
        {
            c.Ngaycapnhat = DateTime.Now;
            //c.CreatedBy = "ngoc dz";
            db.HoSoNhanViens.Add(c);
            db.SaveChanges();
            return new JsonResult("add succesfull");
        }
        // PUT api/<hosonhanvienController>/5
        [HttpPut]
        public JsonResult Put(HoSoNhanVien sua)
        {
            sua.Ngaycapnhat = DateTime.Now;
            var data = db.HoSoNhanViens.Update(sua);
            db.SaveChanges();
            return new JsonResult("cập nhật thành công");
        }

        // DELETE api/<hosonhanvienController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            HoSoNhanVien ca = db.HoSoNhanViens.FirstOrDefault(x => x.Id == id);
            db.HoSoNhanViens.Remove(ca);
            db.SaveChanges();
            return new JsonResult("xóa thành công");
        }
    }
}
