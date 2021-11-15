using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class CongTac
    {
        public int Id { get; set; }
        public int? Idnhanvien { get; set; }
        public DateTime? Tungay { get; set; }
        public DateTime? Denngay { get; set; }
        public string Diadiem { get; set; }
        public string Mucdich { get; set; }
        public string Ghichu { get; set; }

        public virtual NhanVien IdnhanvienNavigation { get; set; }
    }
}
