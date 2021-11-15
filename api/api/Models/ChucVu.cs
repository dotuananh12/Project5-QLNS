using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class ChucVu
    {
        public ChucVu()
        {
            NhanViens = new HashSet<NhanVien>();
        }

        public int Id { get; set; }
        public string Tenchucvu { get; set; }
        public string Machucvu { get; set; }

        public virtual ICollection<NhanVien> NhanViens { get; set; }
    }
}
