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
    public class baohiemController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public baohiemController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        vd3Context db = new vd3Context();
        // GET: api/<baohiemController>
        [HttpGet]
        public IActionResult Get()
        {
            var result = from t1 in db.BaoHiems
                         join t2 in db.NhanViens on t1.Idnhanvien equals t2.Id

                         select new
                         {
                             t1.Id,
                             t1.Idnhanvien,
                             t1.Tenbaohiem,
                             t1.Mucphi,
                             t1.Status,
                             t1.Ngaytao,
                             //
                             t2.Hoten,
                             t2.kyhieunv
                         };
            return Ok(result.ToList());
        }

        // GET api/<baohiemController>/5
        [Route("{id}")]
        [HttpGet]
        public IActionResult Get(int id)
        {
            var data = db.BaoHiems.SingleOrDefault(x => x.Id == id);
            return Ok(data);
        }
        [Route("list/{id}")]
        [HttpGet]
        public IActionResult Getlist(int id)
        {  
            var data = db.BaoHiems.Where(x => x.Idnhanvien == id).ToList();

            return Ok(data.ToList());
        }
        //public double tinhtien()
        //{
        //    var data = db.BaoHiems.Count();

        //}
        [HttpPost]
        public JsonResult Post([FromBody] BaoHiem c)
        {
            c.Ngaytao = DateTime.Now;
            //
            db.BaoHiems.Add(c);
            db.SaveChanges();
            return new JsonResult("add succesfull");
        }

        // PUT api/<baohiemController>/5
        [HttpPut]
        public JsonResult Put(BaoHiem sua)
        {
            sua.Ngaytao = DateTime.Now;
            var data = db.BaoHiems.Update(sua);
            db.SaveChanges();
            return new JsonResult("cập nhật thành công");
        }
        // DELETE api/<baohiemController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            BaoHiem ca = db.BaoHiems.FirstOrDefault(x => x.Id == id);
            db.BaoHiems.Remove(ca);
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
