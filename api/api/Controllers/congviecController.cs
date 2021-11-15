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
    public class congviecController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public congviecController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        vd3Context db = new vd3Context();
        // GET: api/<congviecController>
        [HttpGet]
        public IActionResult Get()
        {
            var result = from t1 in db.CongViecs
                         join t2 in db.NhanViens on t1.Idnhanvien equals t2.Id

                         select new
                         {
                             t1.Id,
                             t1.Idnhanvien,
                             t1.Tencongviec,
                             t1.Ngaygiao,
                             t1.Ngaynop,
                             t1.Trangthai,
                             t1.Noidung,                 
                             //
                             t2.Hoten,
                             t2.kyhieunv
                         };
            return Ok(result.ToList());
        }

        // GET api/<congviecController>/5
        [Route("{id}")]
        [HttpGet]
        public IActionResult Get(int id)
        {
            var data = db.CongViecs.SingleOrDefault(x => x.Id == id);
            return Ok(data);
        }
        [Route("list/{id}")]
        [HttpGet]
        public IActionResult Getlist(int id)
        {
            var data = db.CongViecs.Where(x => x.Idnhanvien == id).ToList();
            return Ok(data.ToList());
        }


        // POST api/<congviecController>
        [HttpPost]
        public JsonResult Post([FromBody] CongViec c)
        {
            c.Ngaygiao = DateTime.Now;
            //
            db.CongViecs.Add(c);
            db.SaveChanges();
            return new JsonResult("add succesfull");
        }

        // PUT api/<congviecController>/5
        [HttpPut]
        public JsonResult Put(CongViec sua)
        {
            var data = db.CongViecs.Update(sua);
            db.SaveChanges();
            return new JsonResult("cập nhật thành công");
        }
        // DELETE api/<congviecController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            CongViec ca = db.CongViecs.FirstOrDefault(x => x.Id == id);
            db.CongViecs.Remove(ca);
            db.SaveChanges();
            return new JsonResult("xóa thành công");
        }
        [Route("getnv")]
        [HttpGet]
        public IActionResult Getnv()
        {
            return Ok(db.NhanViens.ToList());
        }
    }
}
