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
    public class hesoluongController : ControllerBase
    {

        vd3Context db = new vd3Context();
        // GET: api/<hesoluongController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(db.HeSoLuongs.ToList());
        }

        // GET api/<hesoluongController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var data = db.HeSoLuongs.SingleOrDefault(x => x.Id == id);
            return Ok(data);
        }
        // POST api/<hesoluongController>
        [HttpPost]
        public JsonResult Post([FromBody] HeSoLuong p)
        {
            db.HeSoLuongs.Add(p);
            db.SaveChanges();
            return new JsonResult("Thêm thành công");
        }

        // PUT api/<hesoluongController>/5
        [HttpPut]
        public JsonResult Put(HeSoLuong sua)
        {
            var data = db.HeSoLuongs.Update(sua);
            db.SaveChanges();
            return new JsonResult("cập nhật thành công");
        }

        // DELETE api/<hesoluongController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            HeSoLuong ca = db.HeSoLuongs.FirstOrDefault(x => x.Id == id);
            db.HeSoLuongs.Remove(ca);
            db.SaveChanges();
            return new JsonResult("xóa thành công");
        }
    }
}
