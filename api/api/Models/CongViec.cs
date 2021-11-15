using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class CongViec
    {
        public int Id { get; set; }
        public int? Idnhanvien { get; set; }
        public string Tencongviec { get; set; }
        public DateTime? Ngaygiao { get; set; }
        public DateTime? Ngaynop { get; set; }
        public bool? Trangthai { get; set; }
        public string Noidung { get; set; }

        public virtual NhanVien IdnhanvienNavigation { get; set; }
    }
}
    