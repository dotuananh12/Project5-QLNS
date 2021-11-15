using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class PhongBan
    {
        public PhongBan()
        {
            NhanViens = new HashSet<NhanVien>();
        }

        public int Id { get; set; }
        public string Ten { get; set; }
        public string Maphongban { get; set; }

        public virtual ICollection<NhanVien> NhanViens { get; set; }
    }
}
