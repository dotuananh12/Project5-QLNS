import { Component, OnInit } from '@angular/core';
import { KhieunaiService } from 'src/app/services/khieunai.service';
@Component({
  selector: 'app-khieunai',
  templateUrl: './khieunai.component.html',
  // styleUrls: ['./hosonhanvien.component.css']
})
export class KhieunaiComponent implements OnInit {
  display: any = false;
  page: any = 1;
  ModalTitle: any = "";
  khieunais: any = [];
  totalLength: any;
  searchText: any;

  id:any;
  idnhanvien:any;
  ngaykhieunai:any;
  noidung:any;
  trangthaii:any;
  hoidap:any;
  dskn:any;
 
  constructor(private khieunaiService: KhieunaiService) { }

  ngOnInit(): void {
    this.khieunaiList();
  }
  khieunaiList() {
    this.khieunaiService.getall().subscribe(data => {
      this.khieunais = data;
      this.totalLength = data.length;
      console.log(this.khieunais);
    });
  }
  add() {
    var val = {
      id: this.id,
      idnhanvien: this.idnhanvien,
      ngaykhieunai: this.ngaykhieunai,
      noidung:this.noidung,
      trangthaii: this.trangthaii,
      hoidap: this.hoidap
      
    };
    this.khieunaiService.addKhieunai(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  onEdit(item: any): void {
    this.khieunaiService
      .getByid(item)
      .subscribe({
        next: (loai) => {
          //console.log(supplier);
          this.id = loai.id;
          this.idnhanvien= loai.idnhanvien;
          this.ngaykhieunai= loai.ngaykhieunai;
          this.noidung=loai.noidung;
          this.trangthaii= loai.trangthaii;
          this.hoidap= loai.hoidap;
        },
      });
  }

  update(){
    var val = {
      id: this.id,
      idnhanvien: this.idnhanvien,
      ngaykhieunai: this.ngaykhieunai,
      noidung:this.noidung,
      trangthaii: this.trangthaii,
      hoidap: this.hoidap
    };
    this.khieunaiService.updateKhieunai(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  closeClick() {
    this.display = false;
    this.khieunaiList;
  }
  deleteClick(item: any) {
    if (confirm('Bạn có muốn xóa không ??')) {
      this.khieunaiService.deleteKhieunai(item.id).subscribe(data => {
        alert(data.toString());
        this.khieunaiList();
      });
    }
  }
}

