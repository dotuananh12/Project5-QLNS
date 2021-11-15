using api.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class chucvuController : ControllerBase
    {
        vd3Context db = new vd3Context();
        // GET: api/<chucvuController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(db.ChucVus.ToList());
        }

        // GET api/<chucvuController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var data = db.ChucVus.SingleOrDefault(x => x.Id == id);
            return Ok(data);
        }
        // POST api/<chucvuController>
        [HttpPost]
        public JsonResult Post([FromBody] ChucVu p)
        {
            db.ChucVus.Add(p);
            db.SaveChanges();
            return new JsonResult("Thêm thành công");
        }

        // PUT api/<chucvuController>/5
        [HttpPut]
        public JsonResult Put(ChucVu sua)
        {
            var data = db.ChucVus.Update(sua);
            db.SaveChanges();
            return new JsonResult("cập nhật thành công");
        }

        // DELETE api/<chucvuController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            ChucVu ca = db.ChucVus.FirstOrDefault(x => x.Id == id);
            db.ChucVus.Remove(ca);
            db.SaveChanges();
            return new JsonResult("xóa thành công");
        }
    }
}
