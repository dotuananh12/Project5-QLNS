USE [vd3]
GO
/****** Object:  Table [dbo].[BaoHiem]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BaoHiem](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idnhanvien] [int] NULL,
	[tenbaohiem] [nvarchar](50) NULL,
	[mucphi] [float] NULL,
	[status] [int] NULL,
	[ngaytao] [date] NULL,
 CONSTRAINT [PK_BaoHiem] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ChamCong]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChamCong](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idnhanvien] [int] NULL,
	[songaylamviec] [float] NULL,
	[sogiolamthem] [float] NULL,
	[thang] [nvarchar](50) NULL,
	[nam] [nvarchar](50) NULL,
	[dieukien] [nvarchar](50) NULL,
	[ghichu] [nvarchar](50) NULL,
 CONSTRAINT [PK_ChamCong] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ChucVu]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChucVu](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[tenchucvu] [nvarchar](50) NULL,
	[machucvu] [nvarchar](50) NULL,
 CONSTRAINT [PK_ChucVu] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CongTac]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CongTac](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idnhanvien] [int] NULL,
	[tungay] [date] NULL,
	[denngay] [date] NULL,
	[diadiem] [nvarchar](50) NULL,
	[mucdich] [nvarchar](max) NULL,
	[ghichu] [nvarchar](50) NULL,
 CONSTRAINT [PK_CongTac] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Congviec]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Congviec](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idnhanvien] [int] NULL,
	[tencongviec] [nvarchar](50) NULL,
	[ngaygiao] [date] NULL,
	[ngaynop] [date] NULL,
	[trangthai] [bit] NULL,
	[noidung] [nvarchar](max) NULL,
 CONSTRAINT [PK_congviec] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HeSoLuong]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HeSoLuong](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ten] [nvarchar](50) NULL,
	[giatri] [float] NULL,
 CONSTRAINT [PK_HeSoLuong] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HoSoNhanVien]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HoSoNhanVien](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[cmt] [float] NULL,
	[phone] [float] NULL,
	[ngaycapnhat] [date] NULL,
	[gioitinh] [bit] NULL,
	[ngaysinh] [date] NULL,
	[quequan] [nvarchar](50) NULL,
	[email] [nvarchar](50) NULL,
	[trinhdohocvan] [nvarchar](50) NULL,
	[ngoaingu] [nvarchar](50) NULL,
	[ngaybatdau] [date] NULL,
	[kyhieunv] [nvarchar](50) NULL,
 CONSTRAINT [PK_HoSoNhanVien] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[KhieuNai]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KhieuNai](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idnhanvien] [int] NULL,
	[ngaykhieunai] [date] NULL,
	[noidung] [nvarchar](max) NULL,
	[trangthaii] [int] NULL,
	[hoidap] [nvarchar](max) NULL,
 CONSTRAINT [PK_KhieuNai] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[NhanVien]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NhanVien](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[hoten] [nvarchar](50) NULL,
	[hosonhanvien] [int] NULL,
	[trangthai] [int] NULL,
	[img] [nvarchar](200) NULL,
	[maphongban] [int] NULL,
	[machucvu] [int] NULL,
	[mahesoluong] [int] NULL,
	[kyhieunv] [nvarchar](50) NULL,
	[mk] [nvarchar](50) NULL,
 CONSTRAINT [PK_NhanVien] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PhongBan]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PhongBan](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ten] [nvarchar](50) NULL,
	[maphongban] [nvarchar](50) NULL,
 CONSTRAINT [PK_PhongBan] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Quyen]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Quyen](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nchar](10) NULL,
	[value] [nchar](10) NULL,
 CONSTRAINT [PK_Quen] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TaiKhoan]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaiKhoan](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[pass] [nvarchar](50) NULL,
	[idrole] [int] NULL,
	[status] [int] NULL,
	[email] [nvarchar](50) NULL,
	[dienthoai] [int] NULL,
	[ngaytao] [date] NULL,
 CONSTRAINT [PK_TaiKhoan] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TieuChiTuyenDung]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TieuChiTuyenDung](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[vitri] [nvarchar](50) NULL,
	[yeucau] [nvarchar](50) NULL,
	[mucluong] [float] NULL,
	[thuong] [float] NULL,
	[soluong] [int] NULL,
	[trinhdo] [nvarchar](50) NULL,
 CONSTRAINT [PK_TieuChiTuyenDung] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TinhLuong]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TinhLuong](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idnhanvien] [int] NULL,
	[idchamcong] [int] NULL,
	[tong] [float] NULL,
	[thang] [nvarchar](50) NULL,
	[nam] [nvarchar](50) NULL,
 CONSTRAINT [PK_TinhLuong] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TrangThai]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TrangThai](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[tentrangthai] [nvarchar](50) NULL,
 CONSTRAINT [PK_TrangThai] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TroCap]    Script Date: 11/15/2021 10:29:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TroCap](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idnhanvien] [int] NULL,
	[ten] [nvarchar](50) NULL,
	[giatri] [float] NULL,
	[ngaytao] [date] NULL,
 CONSTRAINT [PK_TroCap] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BaoHiem]  WITH CHECK ADD  CONSTRAINT [FK_BaoHiem_NhanVien] FOREIGN KEY([idnhanvien])
REFERENCES [dbo].[NhanVien] ([id])
GO
ALTER TABLE [dbo].[BaoHiem] CHECK CONSTRAINT [FK_BaoHiem_NhanVien]
GO
ALTER TABLE [dbo].[ChamCong]  WITH CHECK ADD  CONSTRAINT [FK_ChamCong_NhanVien] FOREIGN KEY([idnhanvien])
REFERENCES [dbo].[NhanVien] ([id])
GO
ALTER TABLE [dbo].[ChamCong] CHECK CONSTRAINT [FK_ChamCong_NhanVien]
GO
ALTER TABLE [dbo].[CongTac]  WITH CHECK ADD  CONSTRAINT [FK_CongTac_NhanVien] FOREIGN KEY([idnhanvien])
REFERENCES [dbo].[NhanVien] ([id])
GO
ALTER TABLE [dbo].[CongTac] CHECK CONSTRAINT [FK_CongTac_NhanVien]
GO
ALTER TABLE [dbo].[Congviec]  WITH CHECK ADD  CONSTRAINT [FK_congviec_NhanVien] FOREIGN KEY([idnhanvien])
REFERENCES [dbo].[NhanVien] ([id])
GO
ALTER TABLE [dbo].[Congviec] CHECK CONSTRAINT [FK_congviec_NhanVien]
GO
ALTER TABLE [dbo].[KhieuNai]  WITH CHECK ADD  CONSTRAINT [FK_KhieuNai_NhanVien] FOREIGN KEY([idnhanvien])
REFERENCES [dbo].[NhanVien] ([id])
GO
ALTER TABLE [dbo].[KhieuNai] CHECK CONSTRAINT [FK_KhieuNai_NhanVien]
GO
ALTER TABLE [dbo].[NhanVien]  WITH CHECK ADD  CONSTRAINT [FK_NhanVien_ChucVu] FOREIGN KEY([machucvu])
REFERENCES [dbo].[ChucVu] ([id])
GO
ALTER TABLE [dbo].[NhanVien] CHECK CONSTRAINT [FK_NhanVien_ChucVu]
GO
ALTER TABLE [dbo].[NhanVien]  WITH CHECK ADD  CONSTRAINT [FK_NhanVien_HeSoLuong] FOREIGN KEY([mahesoluong])
REFERENCES [dbo].[HeSoLuong] ([id])
GO
ALTER TABLE [dbo].[NhanVien] CHECK CONSTRAINT [FK_NhanVien_HeSoLuong]
GO
ALTER TABLE [dbo].[NhanVien]  WITH CHECK ADD  CONSTRAINT [FK_NhanVien_HoSoNhanVien] FOREIGN KEY([hosonhanvien])
REFERENCES [dbo].[HoSoNhanVien] ([id])
GO
ALTER TABLE [dbo].[NhanVien] CHECK CONSTRAINT [FK_NhanVien_HoSoNhanVien]
GO
ALTER TABLE [dbo].[NhanVien]  WITH CHECK ADD  CONSTRAINT [FK_NhanVien_PhongBan] FOREIGN KEY([maphongban])
REFERENCES [dbo].[PhongBan] ([id])
GO
ALTER TABLE [dbo].[NhanVien] CHECK CONSTRAINT [FK_NhanVien_PhongBan]
GO
ALTER TABLE [dbo].[NhanVien]  WITH CHECK ADD  CONSTRAINT [FK_NhanVien_TrangThai] FOREIGN KEY([trangthai])
REFERENCES [dbo].[TrangThai] ([id])
GO
ALTER TABLE [dbo].[NhanVien] CHECK CONSTRAINT [FK_NhanVien_TrangThai]
GO
ALTER TABLE [dbo].[TaiKhoan]  WITH CHECK ADD  CONSTRAINT [FK_TaiKhoan_Quyen] FOREIGN KEY([idrole])
REFERENCES [dbo].[Quyen] ([id])
GO
ALTER TABLE [dbo].[TaiKhoan] CHECK CONSTRAINT [FK_TaiKhoan_Quyen]
GO
ALTER TABLE [dbo].[TinhLuong]  WITH CHECK ADD  CONSTRAINT [FK_TinhLuong_NhanVien] FOREIGN KEY([idnhanvien])
REFERENCES [dbo].[NhanVien] ([id])
GO
ALTER TABLE [dbo].[TinhLuong] CHECK CONSTRAINT [FK_TinhLuong_NhanVien]
GO
ALTER TABLE [dbo].[TroCap]  WITH CHECK ADD  CONSTRAINT [FK_TroCap_NhanVien] FOREIGN KEY([idnhanvien])
REFERENCES [dbo].[NhanVien] ([id])
GO
ALTER TABLE [dbo].[TroCap] CHECK CONSTRAINT [FK_TroCap_NhanVien]
GO
