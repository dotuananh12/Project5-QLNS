using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class ChamCong
    {
        public int Id { get; set; }
        public int? Idnhanvien { get; set; }
        public double? Songaylamviec { get; set; }
        public double? Sogiolamthem { get; set; }
        public string Thang { get; set; }
        public string Nam { get; set; }
        public string Dieukien { get; set; }
        public string Ghichu { get; set; }

        public virtual NhanVien IdnhanvienNavigation { get; set; }
    }
}
