using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class Quyen
    {
        public Quyen()
        {
            TaiKhoans = new HashSet<TaiKhoan>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }

        public virtual ICollection<TaiKhoan> TaiKhoans { get; set; }
    }
}
