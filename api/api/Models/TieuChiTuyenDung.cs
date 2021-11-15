using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class TieuChiTuyenDung
    {
        public int Id { get; set; }
        public string Vitri { get; set; }
        public string Yeucau { get; set; }
        public double? Mucluong { get; set; }
        public double? Thuong { get; set; }
        public int? Soluong { get; set; }
        public string Trinhdo { get; set; }
    }
}
