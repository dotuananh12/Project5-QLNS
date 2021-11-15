import { Component, OnInit } from '@angular/core';
import { HosonhanvienService } from 'src/app/services/hosonhanvien.service';
@Component({
  selector: 'app-hosonhanvien',
  templateUrl: './hosonhanvien.component.html',
  // styleUrls: ['./hosonhanvien.component.css']
})
export class HosonhanvienComponent implements OnInit {
  display: any = false;
  page: any = 1;
  ModalTitle: any = "";
  hosonhanviens: any = [];
  totalLength: any;
  searchText: any;

  id:any;
  cmt:any;
  phone:any;
  ngaycapnhat:any;
  gioitinh:any;
  ngaysinh:any;
  quequan:any;
  email:any;
  trinhdohocvan:any;
  ngoaingu:any;
  ngaybatdau:any;
  kyhieunv:any;
  constructor(private hosonhanvienService: HosonhanvienService) { }

  ngOnInit(): void {
    this.hosonhanvienList();
  }
  hosonhanvienList() {
    this.hosonhanvienService.getall().subscribe(data => {
      this.hosonhanviens = data;
      this.totalLength = data.length;
      console.log(this.hosonhanviens);
    });
  }
  add() {
    var val = {
      id: this.id,
      cmt: this.cmt,
      phone: this.phone,
      ngaycapnhat:this.ngaycapnhat,
      gioitinh: this.gioitinh,
      ngaysinh: this.ngaysinh,
      quequan: this.quequan,
      email: this.email,
      trinhdohocvan: this.trinhdohocvan,
      ngoaingu: this.ngoaingu,
      ngaybatdau: this.ngaybatdau,
      kyhieunv: this. kyhieunv      
    };
    this.hosonhanvienService.addHosonhanvien(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  onEdit(item: any): void {
    this.hosonhanvienService
      .getByid(item)
      .subscribe({
        next: (loai) => {
          //console.log(supplier);
          this.id = loai.id;
          this.cmt= loai.cmt;
          this.phone= loai.phone;
          this.ngaycapnhat=loai.ngaycapnhat;
          this.gioitinh= loai.gioitinh;
          this.ngaysinh= loai.ngaysinh;
          this.quequan= loai.quequan;
          this.email= loai.email;
          this.trinhdohocvan= loai.trinhdohocvan;
          this.ngoaingu= loai.ngoaingu;
          this.ngaybatdau= loai.ngaybatdau;
          this.kyhieunv= loai.kyhieunv    
        },
      });
  }

  update(){
    var val = {
      id: this.id,
      cmt: this.cmt,
      phone: this.phone,
      ngaycapnhat:this.ngaycapnhat,
      gioitinh: this.gioitinh,
      ngaysinh: this.ngaysinh,
      quequan: this.quequan,
      email: this.email,
      trinhdohocvan: this.trinhdohocvan,
      ngoaingu: this.ngoaingu,
      ngaybatdau: this.ngaybatdau,
      kyhieunv: this. kyhieunv  
    };
    this.hosonhanvienService.updateHosonhanvien(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  closeClick() {
    this.display = false;
    this.hosonhanvienList;
  }
  deleteClick(item: any) {
    if (confirm('Bạn có muốn xóa không ??')) {
      this.hosonhanvienService.deleteHosonhanvien(item.id).subscribe(data => {
        alert(data.toString());
        this.hosonhanvienList();
      });
    }
  }
}
