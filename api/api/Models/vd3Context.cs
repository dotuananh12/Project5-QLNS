using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace api.Models
{
    public partial class vd3Context : DbContext
    {
        public vd3Context()
        {
        }

        public vd3Context(DbContextOptions<vd3Context> options)
            : base(options)
        {
        }

        public virtual DbSet<BaoHiem> BaoHiems { get; set; }
        public virtual DbSet<CongViec> CongViecs { get; set; }
        public virtual DbSet<ChamCong> ChamCongs { get; set; }
        public virtual DbSet<ChucVu> ChucVus { get; set; }
        public virtual DbSet<CongTac> CongTacs { get; set; }
        public virtual DbSet<HeSoLuong> HeSoLuongs { get; set; }
        public virtual DbSet<HoSoNhanVien> HoSoNhanViens { get; set; }
        public virtual DbSet<NhanVien> NhanViens { get; set; }
        public virtual DbSet<PhongBan> PhongBans { get; set; }
        public virtual DbSet<Quyen> Quyens { get; set; }
        public virtual DbSet<TaiKhoan> TaiKhoans { get; set; }
        public virtual DbSet<TieuChiTuyenDung> TieuChiTuyenDungs { get; set; }
        public virtual DbSet<TinhLuong> TinhLuongs { get; set; }
        public virtual DbSet<TrangThai> TrangThais { get; set; }
        public virtual DbSet<TroCap> TroCaps { get; set; }
        public virtual DbSet<KhieuNai> KhieuNais { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //optionsBuilder.UseSqlServer("Name=vd3");
                optionsBuilder.UseSqlServer("Server=LAPTOP-CO1N6HTP;Database=vd3;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<BaoHiem>(entity =>
            {
                entity.ToTable("BaoHiem");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Idnhanvien).HasColumnName("idnhanvien");

                entity.Property(e => e.Mucphi).HasColumnName("mucphi");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.Ngaytao)
                 .HasColumnType("date")
                 .HasColumnName("ngaytao");

                entity.Property(e => e.Tenbaohiem)
                    .HasMaxLength(50)
                    .HasColumnName("tenbaohiem");

                entity.HasOne(d => d.IdnhanvienNavigation)
                    .WithMany(p => p.BaoHiems)
                    .HasForeignKey(d => d.Idnhanvien)
                    .HasConstraintName("FK_BaoHiem_NhanVien");
            });

            modelBuilder.Entity<CongViec>(entity =>
            {
                entity.ToTable("CongViec");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Idnhanvien).HasColumnName("idnhanvien");

                entity.Property(e => e.Tencongviec)
                .HasMaxLength(50)
                .HasColumnName("tencongviec");

                entity.Property(e => e.Ngaygiao)
                    .HasColumnType("date")
                    .HasColumnName("ngaygiao");

                entity.Property(e => e.Ngaynop)
                    .HasColumnType("date")
                    .HasColumnName("ngaynop");

                entity.Property(e => e.Trangthai).HasColumnName("trangthai");
            

                entity.Property(e => e.Noidung)
                    //.HasMaxLength(50)
                    .HasColumnName("noidung");

                entity.HasOne(d => d.IdnhanvienNavigation)
                   .WithMany(g=>g.CongViecs)
                   .HasForeignKey(d => d.Idnhanvien)
                   .HasConstraintName("FK_CongViec_NhanVien");

            });

            modelBuilder.Entity<KhieuNai>(entity =>
            {
                entity.ToTable("KhieuNai");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Idnhanvien).HasColumnName("idnhanvien");

                entity.Property(e => e.Ngaykhieunai)
                    .HasColumnType("date")
                    .HasColumnName("ngaykhieunai");

                entity.Property(e => e.Noidung)
                    //.HasMaxLength(50)
                    .HasColumnName("noidung");

                entity.Property(e => e.Trangthaii).HasColumnName("trangthaii");

                entity.Property(e => e.Hoidap)
                    //.HasMaxLength(50)
                    .HasColumnName("hoidap");

                entity.HasOne(d => d.IdnhanvienNavigation)
                   .WithMany(g => g.KhieuNais)
                   .HasForeignKey(d => d.Idnhanvien)
                   .HasConstraintName("FK_KhieuNai_NhanVien");

            });

            modelBuilder.Entity<ChamCong>(entity =>
            {
                entity.ToTable("ChamCong");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Dieukien)
                    .HasMaxLength(50)
                    .HasColumnName("dieukien");

                entity.Property(e => e.Ghichu)
                    .HasMaxLength(50)
                    .HasColumnName("ghichu");

                entity.Property(e => e.Idnhanvien).HasColumnName("idnhanvien");

                entity.Property(e => e.Nam)
                    .HasMaxLength(50)
                    .HasColumnName("nam");

                entity.Property(e => e.Sogiolamthem).HasColumnName("sogiolamthem");

                entity.Property(e => e.Songaylamviec).HasColumnName("songaylamviec");

                entity.Property(e => e.Thang)
                    .HasMaxLength(50)
                    .HasColumnName("thang");

                entity.HasOne(d => d.IdnhanvienNavigation)
                    .WithMany(p => p.ChamCongs)
                    .HasForeignKey(d => d.Idnhanvien)
                    .HasConstraintName("FK_ChamCong_NhanVien");
            });

            modelBuilder.Entity<ChucVu>(entity =>
            {
                entity.ToTable("ChucVu");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Machucvu)
                    .HasMaxLength(50)
                    .HasColumnName("machucvu");

                entity.Property(e => e.Tenchucvu)
                    .HasMaxLength(50)
                    .HasColumnName("tenchucvu");
            });

            modelBuilder.Entity<CongTac>(entity =>
            {
                entity.ToTable("CongTac");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Denngay)
                    .HasColumnType("date")
                    .HasColumnName("denngay");

                entity.Property(e => e.Diadiem)
                    .HasMaxLength(50)
                    .HasColumnName("diadiem");

                entity.Property(e => e.Ghichu)
                    .HasMaxLength(50)
                    .HasColumnName("ghichu");

                entity.Property(e => e.Idnhanvien).HasColumnName("idnhanvien");

                entity.Property(e => e.Mucdich).HasColumnName("mucdich");

                entity.Property(e => e.Tungay)
                    .HasColumnType("date")
                    .HasColumnName("tungay");

                entity.HasOne(d => d.IdnhanvienNavigation)
                    .WithMany(p => p.CongTacs)
                    .HasForeignKey(d => d.Idnhanvien)
                    .HasConstraintName("FK_CongTac_NhanVien");
            });

            modelBuilder.Entity<HeSoLuong>(entity =>
            {
                entity.ToTable("HeSoLuong");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Giatri).HasColumnName("giatri");

                entity.Property(e => e.Ten)
                    .HasMaxLength(50)
                    .HasColumnName("ten");
            });

            modelBuilder.Entity<HoSoNhanVien>(entity =>
            {
                entity.ToTable("HoSoNhanVien");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Cmt).HasColumnName("cmt");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.Gioitinh).HasColumnName("gioitinh");

                entity.Property(e => e.Ngaybatdau)
                    .HasColumnType("date")
                    .HasColumnName("ngaybatdau");

                entity.Property(e => e.Ngaycapnhat)
                    .HasColumnType("date")
                    .HasColumnName("ngaycapnhat");

                entity.Property(e => e.Ngaysinh)
                    .HasColumnType("date")
                    .HasColumnName("ngaysinh");

                entity.Property(e => e.Ngoaingu)
                    .HasMaxLength(50)
                    .HasColumnName("ngoaingu");

                entity.Property(e => e.Phone).HasColumnName("phone");

                entity.Property(e => e.Quequan)
                    .HasMaxLength(50)
                    .HasColumnName("quequan");

                entity.Property(e => e.Trinhdohocvan)
                    .HasMaxLength(50)
                    .HasColumnName("trinhdohocvan");
                entity.Property(e => e.kyhieunv)
                   .HasMaxLength(50)
                   .HasColumnName("kyhieunv");
            });

            modelBuilder.Entity<NhanVien>(entity =>
            {
                entity.ToTable("NhanVien");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Hosonhanvien).HasColumnName("hosonhanvien");

                entity.Property(e => e.Hoten)
                    .HasMaxLength(50)
                    .HasColumnName("hoten");

                entity.Property(e => e.Img)
                    .HasMaxLength(200)
                    .HasColumnName("img");

                entity.Property(e => e.Machucvu).HasColumnName("machucvu");

                entity.Property(e => e.Mahesoluong).HasColumnName("mahesoluong");

                entity.Property(e => e.Maphongban).HasColumnName("maphongban");

                entity.Property(e => e.Trangthai).HasColumnName("trangthai");

                entity.HasOne(d => d.HosonhanvienNavigation)
                    .WithMany(p => p.NhanViens)
                    .HasForeignKey(d => d.Hosonhanvien)
                    .HasConstraintName("FK_NhanVien_HoSoNhanVien");

                entity.HasOne(d => d.MachucvuNavigation)
                    .WithMany(p => p.NhanViens)
                    .HasForeignKey(d => d.Machucvu)
                    .HasConstraintName("FK_NhanVien_ChucVu");

                entity.HasOne(d => d.MahesoluongNavigation)
                    .WithMany(p => p.NhanViens)
                    .HasForeignKey(d => d.Mahesoluong)
                    .HasConstraintName("FK_NhanVien_HeSoLuong");

                entity.HasOne(d => d.MaphongbanNavigation)
                    .WithMany(p => p.NhanViens)
                    .HasForeignKey(d => d.Maphongban)
                    .HasConstraintName("FK_NhanVien_PhongBan");

                entity.HasOne(d => d.TrangthaiNavigation)
                    .WithMany(p => p.NhanViens)
                    .HasForeignKey(d => d.Trangthai)
                    .HasConstraintName("FK_NhanVien_TrangThai");
                entity.Property(e => e.kyhieunv)
                  .HasMaxLength(50)
                  .HasColumnName("kyhieunv");
                entity.Property(e => e.mk)
                 .HasMaxLength(50)
                 .HasColumnName("mk");
            });

            modelBuilder.Entity<PhongBan>(entity =>
            {
                entity.ToTable("PhongBan");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Maphongban)
                    .HasMaxLength(50)
                    .HasColumnName("maphongban");

                entity.Property(e => e.Ten)
                    .HasMaxLength(50)
                    .HasColumnName("ten");
            });

            modelBuilder.Entity<Quyen>(entity =>
            {
                entity.ToTable("Quyen");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(10)
                    .HasColumnName("name")
                    .IsFixedLength(true);

                entity.Property(e => e.Value)
                    .HasMaxLength(10)
                    .HasColumnName("value")
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<TaiKhoan>(entity =>
            {
                entity.ToTable("TaiKhoan");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Idrole).HasColumnName("idrole");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.Pass)
                    .HasMaxLength(50)
                    .HasColumnName("pass");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.Dienthoai).HasColumnName("dienthoai");

                entity.Property(e => e.Ngaytao)
                    .HasColumnType("date")
                    .HasColumnName("ngaytao");

                entity.HasOne(d => d.IdroleNavigation)
                    .WithMany(p => p.TaiKhoans)
                    .HasForeignKey(d => d.Idrole)
                    .HasConstraintName("FK_TaiKhoan_Quyen");
            });

            modelBuilder.Entity<TieuChiTuyenDung>(entity =>
            {
                entity.ToTable("TieuChiTuyenDung");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Mucluong).HasColumnName("mucluong");

                entity.Property(e => e.Soluong).HasColumnName("soluong");

                entity.Property(e => e.Thuong).HasColumnName("thuong");

                entity.Property(e => e.Trinhdo)
                    .HasMaxLength(50)
                    .HasColumnName("trinhdo");

                entity.Property(e => e.Vitri)
                    .HasMaxLength(50)
                    .HasColumnName("vitri");

                entity.Property(e => e.Yeucau)
                    .HasMaxLength(50)
                    .HasColumnName("yeucau");
            });

            modelBuilder.Entity<TinhLuong>(entity =>
            {
                entity.ToTable("TinhLuong");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Idchamcong).HasColumnName("idchamcong");

                entity.Property(e => e.Idnhanvien).HasColumnName("idnhanvien");

                entity.Property(e => e.Nam)
                    .HasMaxLength(50)
                    .HasColumnName("nam");

                entity.Property(e => e.Thang)
                    .HasMaxLength(50)
                    .HasColumnName("thang");

                entity.Property(e => e.Tong).HasColumnName("tong");

                entity.HasOne(d => d.IdnhanvienNavigation)
                    .WithMany(p => p.TinhLuongs)
                    .HasForeignKey(d => d.Idnhanvien)
                    .HasConstraintName("FK_TinhLuong_NhanVien");
            });

            modelBuilder.Entity<TrangThai>(entity =>
            {
                entity.ToTable("TrangThai");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Tentrangthai)
                    .HasMaxLength(50)
                    .HasColumnName("tentrangthai");
            });

            modelBuilder.Entity<TroCap>(entity =>
            {
                entity.ToTable("TroCap");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Giatri).HasColumnName("giatri");

                entity.Property(e => e.Idnhanvien).HasColumnName("idnhanvien");

                entity.Property(e => e.Ngaytao)
                 .HasColumnType("date")
                 .HasColumnName("ngaytao");

                entity.Property(e => e.Ten)
                    .HasMaxLength(50)
                    .HasColumnName("ten");

                entity.HasOne(d => d.IdnhanvienNavigation)
                    .WithMany(p => p.TroCaps)
                    .HasForeignKey(d => d.Idnhanvien)
                    .HasConstraintName("FK_TroCap_NhanVien");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
