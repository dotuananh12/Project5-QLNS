using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class HeSoLuong
    {
        public HeSoLuong()
        {
            NhanViens = new HashSet<NhanVien>();
        }

        public int Id { get; set; }
        public string Ten { get; set; }
        public double? Giatri { get; set; }

        public virtual ICollection<NhanVien> NhanViens { get; set; }
    }
}
