using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public partial class KhieuNai
    {
        public int Id { get; set; }
        public int? Idnhanvien { get; set; }
        public DateTime? Ngaykhieunai { get; set; }
        public string Noidung { get; set; }
        public int? Trangthaii { get; set; }
        public string Hoidap { get; set; }

        public virtual NhanVien IdnhanvienNavigation { get; set; }
    }
}
