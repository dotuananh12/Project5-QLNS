using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class TinhLuong
    {
        public int Id { get; set; }
        public int? Idnhanvien { get; set; }
        public int? Idchamcong { get; set; }
        public double? Tong { get; set; }
        public string Thang { get; set; }
        public string Nam { get; set; }

        public virtual NhanVien IdnhanvienNavigation { get; set; }
    }
}
