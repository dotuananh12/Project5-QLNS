import { Component, OnInit } from '@angular/core';
import { CongviecService } from 'src/app/services/congviec.service';
@Component({
  selector: 'app-congviec',
  templateUrl: './congviec.component.html',
  // styleUrls: ['./hosonhanvien.component.css']
})
export class CongviecComponent implements OnInit {
  display: any = false;
  page: any = 1;
  ModalTitle: any = "";
  congviecs: any = [];
  totalLength: any;
  searchText: any;

  id:any;
  idnhanvien:any;
  tencongviec:any;
  ngaygiao:any;
  ngaynop:any;
  trangthai:any;
  noidung:any;
  dsnv:any;
 
  constructor(private congviecService: CongviecService) { }

  ngOnInit(): void {
    this.congviecList();
    this.congviecService.getnv().subscribe((data: any) => {
      this.dsnv = data;//lay du lieu 
      this.idnhanvien = this.idnhanvien;
    });
  }
  congviecList() {
    this.congviecService.getall().subscribe(data => {
      this.congviecs = data;
      this.totalLength = data.length;
      console.log(this.congviecs);
    });
  }
  add() {
    var val = {
      id: this.id,
      idnhanvien: this.idnhanvien,
      tencongviec: this.tencongviec,
      ngaygiao:this.ngaygiao,
      ngaynop: this.ngaynop,
      trangthai: this.trangthai,
      noidung: this.noidung
      
    };
    this.congviecService.addCongviec(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  onEdit(item: any): void {
    this.congviecService
      .getByid(item)
      .subscribe({
        next: (loai) => {
          //console.log(supplier);
          this.id = loai.id;
          this.idnhanvien= loai.idnhanvien;
          this.tencongviec= loai.tencongviec;
          this.ngaygiao=loai.ngaygiao;
          this.ngaynop= loai.ngaynop;
          this.trangthai= loai.trangthai;
          this.noidung= loai.noidung;
        },
      });
  }

  update(){
    var val = {
      id: this.id,
      idnhanvien: this.idnhanvien,
      tencongviec: this.tencongviec,
      ngaygiao:this.ngaygiao,
      ngaynop: this.ngaynop,
      trangthai: this.trangthai,
      noidung: this.noidung
    };
    this.congviecService.updateCongviec(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  closeClick() {
    this.display = false;
    this.congviecList;
  }
  deleteClick(item: any) {
    if (confirm('Bạn có muốn xóa không ??')) {
      this.congviecService.deleteCongviec(item.id).subscribe(data => {
        alert(data.toString());
        this.congviecList();
      });
    }
  }
}
