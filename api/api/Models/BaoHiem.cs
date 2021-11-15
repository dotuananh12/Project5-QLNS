using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class BaoHiem
    {
        public int Id { get; set; }
        public int? Idnhanvien { get; set; }
        public string Tenbaohiem { get; set; }
        public double? Mucphi { get; set; }
        public int? Status { get; set; }
        public DateTime? Ngaytao { get; set; }

        public virtual NhanVien IdnhanvienNavigation { get; set; }
    }
}
