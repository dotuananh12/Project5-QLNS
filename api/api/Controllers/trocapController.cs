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
    public class trocapController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public trocapController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        vd3Context db = new vd3Context();
        // GET: api/<trocapController>
        [HttpGet]
        public IActionResult Get()
        {
            var result = from t1 in db.TroCaps
                         join t2 in db.NhanViens on t1.Idnhanvien equals t2.Id

                         select new
                         {
                             t1.Id,
                             t1.Idnhanvien,
                             t1.Ten,
                             t1.Ngaytao,
                             t1.Giatri,
                        
                             //
                             t2.Hoten,
                             t2.kyhieunv
                         };
            return Ok(result.ToList());
        }

        // GET api/<trocapController>/5
        [Route("{id}")]
        [HttpGet]
        public IActionResult Get(int id)
        {
            var data = db.TroCaps.SingleOrDefault(x => x.Id == id);
            return Ok(data);
        }
        [Route("list/{id}")]
        [HttpGet]
        public IActionResult Getlist(int id)
        {
            var data = db.TroCaps.Where(x => x.Idnhanvien == id).ToList();
            return Ok(data.ToList());
        }
        // POST api/<trocapController>
        [HttpPost]
        public JsonResult Post([FromBody] TroCap c)
        {
            c.Ngaytao = DateTime.Now;
            //
            db.TroCaps.Add(c);
            db.SaveChanges();
            return new JsonResult("add succesfull");
        }

        // PUT api/<trocapController>/5
        [HttpPut]
        public JsonResult Put(TroCap sua)
        {
            sua.Ngaytao = DateTime.Now;
            var data = db.TroCaps.Update(sua);
            db.SaveChanges();
            return new JsonResult("cập nhật thành công");
        }
        // DELETE api/<trocapController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            TroCap ca = db.TroCaps.FirstOrDefault(x => x.Id == id);
            db.TroCaps.Remove(ca);
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
