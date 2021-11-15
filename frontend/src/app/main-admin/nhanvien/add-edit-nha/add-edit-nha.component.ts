import { Component, OnInit, Input } from '@angular/core';
import { NhanvienService } from 'src/app/services/nhanvien.service';

@Component({
  selector: 'app-add-edit-nha',
  templateUrl: './add-edit-nha.component.html',
  // styleUrls: ['./add-edit-nha.component.css']
})
export class AddEditNhaComponent implements OnInit {
  @Input() nha: any;
  id: any;
  hoten: any;
  hosonhanvien: any;
  trangthai: any;
  img: any;
  maphongban: any;
  machucvu: any;
  mahesoluong: any;
  kyhieunv:any;
  mk:any;
  PhotoFilePath: any;

  NhanvienList: any = [];
  dstrangthai: any;
  dsphongban:any;
  dschucvu:any;
  dshsnv:any;
  dshsl:any;
  constructor(private nhanvienservice: NhanvienService) { }

  ngOnInit(): void {
    this.loadNhanvienList();
    this.nhanvienservice.gettrangthai().subscribe((data: any) => {
      this.dstrangthai = data;//lay du lieu 
      this.trangthai = this.nha.trangthai;
    });
    this.nhanvienservice.getphongban().subscribe((data: any) => {
      this.dsphongban = data;//lay du lieu 
      this.maphongban = this.nha.maphongban;
    });
    this.nhanvienservice.getchucvu().subscribe((data: any) => {
      this.dschucvu = data;//lay du lieu 
      this.machucvu = this.nha.machucvu;
    });
    this.nhanvienservice.gethsnv().subscribe((data: any) => {
      this.dshsnv = data;//lay du lieu 
      this.hosonhanvien = this.nha.hosonhanvien;
    });
    this.nhanvienservice.gethsl().subscribe((data: any) => {
      this.dshsl = data;//lay du lieu 
      this.mahesoluong = this.nha.mahesoluong;
    });

  }
  loadNhanvienList() {
    this.id = this.nha.id
    this.hoten = this.nha.hoten;
    this.hosonhanvien = this.nha.hosonhanvien;
    this.trangthai = this.nha.trangthai;
    this.img = this.nha.img;
    this.maphongban = this.nha.maphongban;
    this.machucvu = this.nha.machucvu;
    this.mahesoluong = this.nha.mahesoluong;
    this.kyhieunv=this.nha.kyhieunv;
    this.mk=this.nha.mk;
    this.PhotoFilePath = this.nhanvienservice.PhotoUrl + this.img;

  }
  addNhanvien() {
    var val = {
      id: this.id,
      hoten: this.hoten,
      hosonhanvien: this.hosonhanvien,
      trangthai: this.trangthai,
      img: this.img,
      maphongban: this.maphongban,
      machucvu: this.machucvu,
      mahesoluong: this.mahesoluong,
      kyhieunv:this.kyhieunv,
      mk:this.mk
      };

    this.nhanvienservice.addNhanvien(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateNhanvien() {
    var val = {
      id: this.id,
      hoten: this.hoten,
      hosonhanvien: this.hosonhanvien,
      trangthai: this.trangthai,
      img: this.img,
      maphongban: this.maphongban,
      machucvu: this.machucvu,
      mahesoluong: this.mahesoluong,
      kyhieunv: this.kyhieunv,
      mk:this.mk
    };

    this.nhanvienservice.updateNhanvien(val).subscribe(res => {
      alert(res.toString());
    });
  }


  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.nhanvienservice.UploadPhoto(formData).subscribe((data: any) => {
      this.img = data.toString();
      this.PhotoFilePath = this.nhanvienservice.PhotoUrl + this.img;
    })
  }
}

