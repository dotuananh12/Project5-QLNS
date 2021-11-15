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
    public class khieunaiController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public khieunaiController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        vd3Context db = new vd3Context();
        // GET: api/<khieunaiController>
       [HttpGet]
       public IActionResult Get()
        {
            {
                var result = from t1 in db.KhieuNais
                             join t2 in db.NhanViens on t1.Idnhanvien equals t2.Id

                             select new
                             {
                                 t1.Id,
                                 t1.Idnhanvien,
                                 t1.Ngaykhieunai,
                                 t1.Noidung,
                                 t1.Trangthaii,
                                 t1.Hoidap,
                               
                                 //
                                 t2.Hoten,
                                 t2.kyhieunv
                             };
                return Ok(result.ToList());
            }

        }
        // GET api/<khieunaiController>/5
        [Route("{id}")]
        [HttpGet]
        public IActionResult Get(int id)
        {
            var data = db.KhieuNais.SingleOrDefault(x => x.Id == id);
            return Ok(data);
        }
        [Route("list/{id}")]
        [HttpGet]
        public IActionResult Getlist(int id)
        {
            var data = db.KhieuNais.Where(x => x.Idnhanvien == id).ToList();
            return Ok(data.ToList());
        }


        // POST api/<khieunaiController>
        [HttpPost]
        public JsonResult Post([FromBody] KhieuNai c, int idnhanvien)
        {
            c.Ngaykhieunai = DateTime.Now;
            //
            db.KhieuNais.Add(c);
            db.SaveChanges();
            return new JsonResult("add succesfull");
        }

        // PUT api/<khieunaiController>/5
        [HttpPut]
        public JsonResult Put(KhieuNai sua)
        {
            var data = db.KhieuNais.Update(sua);
            db.SaveChanges();
            return new JsonResult("cập nhật thành công");
        }

        // DELETE api/<khieunaiController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            KhieuNai ca = db.KhieuNais.FirstOrDefault(x => x.Id == id);
            db.KhieuNais.Remove(ca);
            db.SaveChanges();
            return new JsonResult("xóa thành công");
        }
    }
}
