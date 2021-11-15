using api.Models;
using api.ViewModels;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        vd3Context db = new vd3Context();
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public LoginController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpPost("login")]
        public IActionResult Login(UserLoginViewModel user)
        {
            var us = db.TaiKhoans.Where(x => x.Name == user.Name && x.Pass == user.Pass).FirstOrDefault();
            return Ok(us);
        }
        [HttpPost("loginuser")]
        public IActionResult Loginuser(UserLoginViewModel user)
        {
            var us = db.NhanViens.Where(x => x.kyhieunv == user.Name && x.mk == user.Pass).FirstOrDefault();
            return Ok(us);
        }
        [HttpPost("register")]
        public IActionResult Register(string name, string pass, string email, int? dienthoai)
        {
            TaiKhoan kh = new TaiKhoan()
            {
                Name = name,
                Pass = pass,
                Email = email,
                Dienthoai = dienthoai,
                Ngaytao = DateTime.Now

            };
            db.TaiKhoans.Add(kh);
            db.SaveChanges();
            return Ok(kh);
        }
    }
   
}
