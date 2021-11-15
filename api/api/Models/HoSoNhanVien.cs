using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class HoSoNhanVien
    {
        public HoSoNhanVien()
        {
            NhanViens = new HashSet<NhanVien>();
        }

        public int Id { get; set; }
        public double? Cmt { get; set; }
        public double? Phone { get; set; }
        public DateTime? Ngaycapnhat { get; set; }
        public bool? Gioitinh { get; set; }
        public DateTime? Ngaysinh { get; set; }
        public string Quequan { get; set; }
        public string Email { get; set; }
        public string Trinhdohocvan { get; set; }
        public string Ngoaingu { get; set; }
        public DateTime? Ngaybatdau { get; set; }
        public string kyhieunv { get; set; }

        public virtual ICollection<NhanVien> NhanViens { get; set; }
    }
}
