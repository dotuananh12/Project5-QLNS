using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace api.Controllers
{ 
    [Route("api/[controller]")]
    [ApiController]
    public class phongbanController : ControllerBase
    {

        private readonly vd3Context _context;

        public phongbanController(vd3Context context)
        {
            _context = context;
        }
        // GET: api/<PhongBansController>

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PhongBan>>> GetPhongBan()
        {
            return await _context.PhongBans.ToListAsync();
        }

        // GET api/<PhongBansController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PhongBan>> GetPhongBan(int id)
        {
            var PhongBan = await _context.PhongBans.FindAsync(id);

            if (PhongBan == null)
            {
                return NotFound();
            }

            return PhongBan;
        }
        //ktra mã trùng
        private bool PhongBanExists(int id)
        {
            return _context.PhongBans.Any(e => e.Id == id);
        }
        // POST api/<PhongBansController>
        [HttpPost]
        public async Task<ActionResult<PhongBan>> PostPhongBan(PhongBan PhongBan)
        {
            if (PhongBanExists(PhongBan.Id))
            {
                return new JsonResult("Mã lớp đã bị trùng vui lòng nhập lại .");
                //   return Conflict("");
            }
            else
            {
               // PhongBan.Isdelete = false;
                _context.PhongBans.Add(PhongBan);
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return new JsonResult("Đã thêm thành công .");
        }

        // PUT api/<PhongBansController>/5
        [HttpPut("{id}")]
        public JsonResult PutPhongBan(int id, PhongBan PhongBan)
        {
            _context.Entry(PhongBan).State = EntityState.Modified;
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return new JsonResult("Update thành công.");
        }

        // DELETE api/<PhongBansController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PhongBan>> DeletePhongBan(int id)
        {
            var PhongBan = await _context.PhongBans.FindAsync(id);
            if (PhongBan == null)
            {
                return NotFound();
            }
            _context.PhongBans.Remove(PhongBan);
            await _context.SaveChangesAsync();
            return PhongBan;
        }
    }
}
