import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhongbanService } from 'src/app/services/phongban.service';

@Component({
  selector: 'app-phongban',
  templateUrl: './phongban.component.html',
  // styleUrls: ['./phongban.component.css']
})
export class PhongbanComponent implements OnInit {
phongbans:any;
  constructor(private phongbanService:PhongbanService,
    private fb: FormBuilder,private router: Router,) { }
    formAdd !:FormGroup;
    formEdit !: FormGroup;
    id_Edit:any;
    searchText:any;
    p:number=1;
    total :any;
  ngOnInit(): void {
    this.DsPhong();
    this.formAdd = this.fb.group({
      ten: this.fb.control('', [Validators.required]),
      maphongban: this.fb.control('', [Validators.required]),
    
    });
    this.formEdit = this.fb.group({
      ten: this.fb.control('', [Validators.required]),
      maphongban: this.fb.control('', [Validators.required]),
    });
  }
  DsPhong() {
    //this.spinner.show();
    this.phongbanService.getAll().subscribe(data => {
      this.phongbans = data;
     // this.totalLength = data.length;
      console.log(this.phongbans);

    });
  }
  add() {
 
    this.phongbanService.add(this.formAdd.value).subscribe((data: any) => {
       alert(data.toString());
     // this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: 'Đã thêm thành công' });
      setTimeout(() => {
        this.router.navigateByUrl('/admin/phongban');
      }, 1000);
      location.reload();
    })

  }
  onEdit(mahp: any): void {
  
    this.phongbanService
      .getByid(mahp)

      .subscribe({
        next: (loai) => {
          this.id_Edit=loai.id;
          console.log(loai);
          this.formEdit = this.fb.group({
            ten: this.fb.control(loai.ten, [Validators.required]),
            id: this.fb.control(loai.id, [Validators.required]),
            maphongban: this.fb.control(loai.maphongban, [Validators.required]),
          });
      
       
        },
      });
  }
  update(){
    if(this.id_Edit>0){
      this.phongbanService.update(this.id_Edit,this.formEdit.value).subscribe((data: any) => {
        alert(data.toString());
        location.reload();
         setTimeout(() => {
          this.router.navigateByUrl('/admin/phongban');
        }, 1000);
      })
    }
  }
  deleteClick(item:any){
    if(confirm('Bạn chắc chắn muốn xóa??')){
      this.phongbanService.delete(item.id).subscribe(data=>{
       // alert(data.toString());
        this.DsPhong();
      })
    }
  }
  closeClick() {
    setTimeout(() => {
      this.router.navigateByUrl('/admin/phongban');
    }, 1000);
    //this.clear();
  }
 

}
