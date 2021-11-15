import { Component, OnInit } from '@angular/core';
import { ChucvuService } from 'src/app/services/chucvu.service';

@Component({
  selector: 'app-chucvu',
  templateUrl: './chucvu.component.html',
  //styleUrls: ['./loaisanpham.component.css']
})
export class ChucvuComponent implements OnInit {
  display: any = false;
  page: any = 1;
  totalLength: any;
  ModalTitle: any = "";
  chucvus: any = [];
  id: any;
  tenchucvu: any;
  machucvu: any;

  //
  searchText: any;
  constructor(private chucvuService: ChucvuService) { }

  ngOnInit(): void {
    this.chucvuList();

  }
  chucvuList() {
    this.chucvuService.getall().subscribe(data => {
      this.chucvus = data;
      this.totalLength = data.length;
      console.log(this.chucvus);
    });
  }
  add() {
    var val = {
      id: this.id,
      tenchucvu: this.tenchucvu,
      machucvu: this.machucvu
    };
    this.chucvuService.addChucvu(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  onEdit(item: any): void {

    this.chucvuService
      .getByid(item)
      .subscribe({
        next: (loai) => {
          this.id = loai.id;
          this.tenchucvu = loai.tenchucvu;
          this.machucvu=loai.machucvu;
        },

      });
  }

  update(){
    var val = {
      id: this.id,
      tenchucvu: this.tenchucvu,
      machucvu: this.machucvu
    };
    this.chucvuService.updateChucvu(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  closeClick() {
    this.display = false;
    this.chucvuList;
  }
  deleteClick(item: any) {
    if (confirm('Bạn có muốn xóa không ??')) {
      this.chucvuService.deleteChucvu(item.id).subscribe(data => {
        alert(data.toString());
        this.chucvuList();
      });
    }
  }

}
