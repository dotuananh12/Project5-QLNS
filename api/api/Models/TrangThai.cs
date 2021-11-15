using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class TrangThai
    {
        public TrangThai()
        {
            NhanViens = new HashSet<NhanVien>();
        }

        public int Id { get; set; }
        public string Tentrangthai { get; set; }

        public virtual ICollection<NhanVien> NhanViens { get; set; }
    }
}
