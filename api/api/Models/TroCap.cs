using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class TroCap
    {
        public int Id { get; set; }
        public int? Idnhanvien { get; set; }
        public string Ten { get; set; }
        public double? Giatri { get; set; }
        public DateTime? Ngaytao { get; set; }

        public virtual NhanVien IdnhanvienNavigation { get; set; }
    }
}
