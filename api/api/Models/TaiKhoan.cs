using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class TaiKhoan
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Pass { get; set; }
        public int? Idrole { get; set; }
        public int? Status { get; set; }
        public string Email { get; set; }
        public int? Dienthoai { get; set; }
        public DateTime? Ngaytao { get; set; }

        public virtual Quyen IdroleNavigation { get; set; }
    }
}
