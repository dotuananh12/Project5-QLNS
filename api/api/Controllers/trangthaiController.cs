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
    public class trangthaiController : ControllerBase
    {
        vd3Context db = new vd3Context();
        // GET: api/<trangthaiController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(db.TrangThais.ToList());
        }

        // GET api/<trangthaiController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var data = db.TrangThais.SingleOrDefault(x => x.Id == id);
            return Ok(data);
        }
        // POST api/<chucvuController>
        [HttpPost]
        public JsonResult Post([FromBody] TrangThai p)
        {
            db.TrangThais.Add(p);
            db.SaveChanges();
            return new JsonResult("Thêm thành công");
        }

        // PUT api/<trangthaiController>/5
        [HttpPut]
        public JsonResult Put(TrangThai sua)
        {
            var data = db.TrangThais.Update(sua);
            db.SaveChanges();
            return new JsonResult("cập nhật thành công");
        }

        // DELETE api/<trangthaiController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            TrangThai ca = db.TrangThais.FirstOrDefault(x => x.Id == id);
            db.TrangThais.Remove(ca);
            db.SaveChanges();
            return new JsonResult("xóa thành công");
        }
    }
}
