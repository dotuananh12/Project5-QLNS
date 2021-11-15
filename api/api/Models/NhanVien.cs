using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class NhanVien
    {
        public NhanVien()
        {
            BaoHiems = new HashSet<BaoHiem>();
            ChamCongs = new HashSet<ChamCong>();
            CongTacs = new HashSet<CongTac>();
            TinhLuongs = new HashSet<TinhLuong>();
            TroCaps = new HashSet<TroCap>();
            CongViecs = new HashSet<CongViec>();
            KhieuNais = new HashSet<KhieuNai>();
        }

        public int Id { get; set; }
        public string Hoten { get; set; }
        public int? Hosonhanvien { get; set; }
        public int? Trangthai { get; set; }
        public string Img { get; set; }
        public int? Maphongban { get; set; }
        public int? Machucvu { get; set; }
        public int? Mahesoluong { get; set; }
        public string kyhieunv { get; set; }
        public string mk { get; set; }

        public virtual HoSoNhanVien HosonhanvienNavigation { get; set; }
        public virtual ChucVu MachucvuNavigation { get; set; }
        public virtual HeSoLuong MahesoluongNavigation { get; set; }
        public virtual PhongBan MaphongbanNavigation { get; set; }
        public virtual TrangThai TrangthaiNavigation { get; set; }
        public virtual ICollection<BaoHiem> BaoHiems { get; set; }
        public virtual ICollection<ChamCong> ChamCongs { get; set; }
        public virtual ICollection<CongTac> CongTacs { get; set; }
        public virtual ICollection<TinhLuong> TinhLuongs { get; set; }
        public virtual ICollection<TroCap> TroCaps { get; set; }
        public virtual ICollection<CongViec> CongViecs { get; set; }
        public virtual ICollection<KhieuNai> KhieuNais { get; set; }
    }
}
