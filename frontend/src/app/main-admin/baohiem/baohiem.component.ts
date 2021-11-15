import { Component, OnInit } from '@angular/core';
import { BaohiemService } from 'src/app/services/baohiem.service';
@Component({
  selector: 'app-baohiem',
  templateUrl: './baohiem.component.html',
  // styleUrls: ['./hosonhanvien.component.css']
})
export class BaohiemComponent implements OnInit {
  display: any = false;
  page: any = 1;
  ModalTitle: any = "";
  baohiems: any = [];
  totalLength: any;
  searchText: any;

  id:any;
  idnhanvien:any;
  tenbaohiem:any;
  mucphi:any;
  status:any;
  ngaytao:any;
  dsnv:any;
  constructor(private baohiemService: BaohiemService) { }

  ngOnInit(): void {
    this.baohiemList();
    this.baohiemService.getnv().subscribe((data: any) => {
      this.dsnv = data;//lay du lieu 
      this.idnhanvien = this.idnhanvien;
    });
  }
  
  baohiemList() {
    this.baohiemService.getall().subscribe(data => {
      this.baohiems = data;
      this.totalLength = data.length;
      console.log(this.baohiems);
    });
  }
  add() {
    var val = {
      id: this.id,
      idnhanvien: this.idnhanvien,
      tenbaohiem: this.tenbaohiem,
      mucphi:this.mucphi,
      status: this.status,
      ngaytao: this.ngaytao
    };
    this.baohiemService.addBaohiem(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  onEdit(item: any): void {
    this.baohiemService
      .getByid(item)
      .subscribe({
        next: (loai) => {
          //console.log(supplier);
          this.id = loai.id;
          this.idnhanvien= loai.idnhanvien;
          this.tenbaohiem= loai.tenbaohiem;
          this.mucphi=loai.mucphi;
          this.status= loai.status;
          this.ngaytao= loai.ngaytao;      
        },
      });
  }

  update(){
    var val = {
      id: this.id,
      idnhanvien: this.idnhanvien,
      tenbaohiem: this.tenbaohiem,
      mucphi:this.mucphi,
      status: this.status,
      ngaytao: this.ngaytao,
    };
    this.baohiemService.updateBaohiem(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  closeClick() {
    this.display = false;
    this.baohiemList;
  }
  deleteClick(item: any) {
    if (confirm('Bạn có muốn xóa không ??')) {
      this.baohiemService.deleteBaohiem(item.id).subscribe(data => {
        alert(data.toString());
        this.baohiemList();
      });
    }
  }
}
