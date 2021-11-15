import { Component, OnInit } from '@angular/core';
import { TrangthaiService } from 'src/app/services/trangthai.service';

@Component({
  selector: 'app-trangthai',
  templateUrl: './trangthai.component.html',
  //styleUrls: ['./loaisanpham.component.css']
})
export class TrangthaiComponent implements OnInit {
  display: any = false;
  page: any = 1;
  totalLength: any;
  ModalTitle: any = "";
  trangthais: any = [];
  id: any;
  tentrangthai: any;


  //
  searchText: any;
  constructor(private trangthaiService: TrangthaiService) { }

  ngOnInit(): void {
    this.trangthaiList();

  }
  trangthaiList() {
    this.trangthaiService.getall().subscribe(data => {
      this.trangthais = data;
      this.totalLength = data.length;
      console.log(this.trangthais);
    });
  }
  add() {
    var val = {
      id: this.id,
      tentrangthai: this.tentrangthai,
      
    };
    this.trangthaiService.addTrangthai(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  onEdit(item: any): void {

    this.trangthaiService
      .getByid(item)
      .subscribe({
        next: (loai) => {
          this.id = loai.id;
          this.tentrangthai = loai.tentrangthai;
        
        },

      });
  }

  update(){
    var val = {
      id: this.id,
      tentrangthai: this.tentrangthai,
    
    };
    this.trangthaiService.updateTrangthai(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  closeClick() {
    this.display = false;
    this.trangthaiList;
  }
  deleteClick(item: any) {
    if (confirm('Bạn có muốn xóa không ??')) {
      this.trangthaiService.deleteTrangthai(item.id).subscribe(data => {
        alert(data.toString());
        this.trangthaiList();
      });
    }
  }

}
