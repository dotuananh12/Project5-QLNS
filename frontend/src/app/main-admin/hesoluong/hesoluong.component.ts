import { Component, OnInit } from '@angular/core';
import { HesoluongService } from 'src/app/services/hesoluong.service';

@Component({
  selector: 'app-hesoluong',
  templateUrl: './hesoluong.component.html',
  //styleUrls: ['./loaisanpham.component.css']
})
export class HesoluongComponent implements OnInit {
  display: any = false;
  page: any = 1;
  totalLength: any;
  ModalTitle: any = "";
  hesoluongs: any = [];
  id: any;
  ten: any;
  giatri: any;

  //
  searchText: any;
  constructor(private hesoluongService: HesoluongService) { }

  ngOnInit(): void {
    this.HesoluongList();

  }
  HesoluongList() {
    this.hesoluongService.getall().subscribe(data => {
      this.hesoluongs = data;
      this.totalLength = data.length;
      console.log(this.hesoluongs);
    });
  }
  add() {
    var val = {
      id: this.id,
      ten: this.ten,
      giatri: this.giatri
    };
    this.hesoluongService.addHesoluong(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  onEdit(item: any): void {

    this.hesoluongService
      .getByid(item)

      .subscribe({
        next: (loai) => {
          //console.log(supplier);
          this.id = loai.id;
          this.ten = loai.ten;
          this.giatri=loai.giatri;
        },

      });
  }
  update(){
    var val = {
      id: this.id,
      ten: this.ten,
      giatri: this.giatri
    };
    this.hesoluongService.updateHesoluong(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  closeClick() {
    this.display = false;
    this.HesoluongList;
  }
  deleteClick(item: any) {
    if (confirm('Bạn có muốn xóa không ??')) {
      this.hesoluongService.deleteHesoluong(item.id).subscribe(data => {
        alert(data.toString());
        this.HesoluongList();
      });
    }
  }

}
