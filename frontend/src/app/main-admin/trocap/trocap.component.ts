import { Component, OnInit } from '@angular/core';
import { TrocapService } from 'src/app/services/trocap.service';
@Component({
  selector: 'app-trocap',
  templateUrl: './trocap.component.html',
  // styleUrls: ['./hosonhanvien.component.css']
})
export class TrocapComponent implements OnInit {
  display: any = false;
  page: any = 1;
  ModalTitle: any = "";
  trocaps: any = [];
  totalLength: any;
  searchText: any;

  id:any;
  idnhanvien:any;
  ten:any;
  giatri:any;
  ngaytao:any;
  dsnv:any;
  constructor(private trocapService: TrocapService) { }

  ngOnInit(): void {
    this.trocapList();
    this.trocapService.getnv().subscribe((data: any) => {
      this.dsnv = data;//lay du lieu 
      this.idnhanvien = this.idnhanvien;
    });
  }
  trocapList() {
    this.trocapService.getall().subscribe(data => {
      this.trocaps = data;
      this.totalLength = data.length;
      console.log(this.trocaps);
    });
  }
  add() {
    var val = {
      id: this.id,
      idnhanvien: this.idnhanvien,
      ten: this.ten,
      giatri:this.giatri,
      ngaytao: this.ngaytao,        
    };
    this.trocapService.addTrocap(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  onEdit(item: any): void {
    this.trocapService
      .getByid(item)
      .subscribe({
        next: (loai) => {
          //console.log(supplier);
          this.id = loai.id;
          this.idnhanvien= loai.idnhanvien;
          this.ten= loai.ten;
          this.giatri=loai.giatri;
          this.ngaytao= loai.ngaytao;      
        },
      });
  }

  update(){
    var val = {
      id: this.id,
      idnhanvien: this.idnhanvien,
      ten: this.ten,
      giatri:this.giatri,
      ngaytao: this.ngaytao,
    };
    this.trocapService.updateTrocap(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  closeClick() {
    this.display = false;
    this.trocapList;
  }
  deleteClick(item: any) {
    if (confirm('Bạn có muốn xóa không ??')) {
      this.trocapService.deleteTrocap(item.id).subscribe(data => {
        alert(data.toString());
        this.trocapList();
      });
    }
  }
}
