import { Component, OnInit } from '@angular/core';
import { NhanvienService } from 'src/app/services/nhanvien.service';
@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  // styleUrls: ['./nhanvien.component.css']
})
export class NhanvienComponent implements OnInit {

  constructor(private nhanvienService: NhanvienService) { }

  NhanvienList: any = [];
  HosoList: any=[];
  GetctnvList: any=[];
  GetctcvList: any=[];
  GetctpbList: any=[];
  ///////////////thêm đoạn này
  ModalTitle: any;
  ActivateAddEditNhaComp: boolean = false;
  nha: any;
  hoten: any;
  p:number=1;
  total :any;
  //
  searchText:any;
  //
  

  ngOnInit(): void {
    this.getProList();

  }

  addClick() {
    this.nha = {
      id: 0,
      PhotoFileName: "anonymous.jpg"
    }
    this.ModalTitle = "Add Product";
    this.ActivateAddEditNhaComp = true;
  }

  editClick(item: any) {
    console.log(item);
    this.nha = item;
    this.ModalTitle = "Edit Product";
    this.ActivateAddEditNhaComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.nhanvienService.deleteNhanvien(item.id).subscribe(data => {
        alert(data.toString());
        this.getProList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditNhaComp = false;
    this.getProList();
  }


  getProList() {
    
    this.nhanvienService.getNhanvien().subscribe(data => {

      this.NhanvienList = data;
      // this.total=data.length;
      // setTimeout(() => {
        /** spinner ends after 5 seconds */
    //   }, 5000);
     });
    
  }
  gethsList(item:any){
    this.nhanvienService.gethsctnv(item.hosonhanvien).subscribe(data =>{
      this.HosoList=data;
    })
  }
  getctnvList(item:any){
    this.nhanvienService.getctnv(item.id).subscribe(data=>{
      this.GetctnvList=data;
    })
  }
  getctcvList(item:any){
    this.nhanvienService.getctcv(item.machucvu).subscribe(data=>{
      this.GetctcvList=data;
    })
  }
  getctpbList(item:any){
    this.nhanvienService.getctpb(item.maphongban).subscribe(data=>{
      this.GetctpbList=data;
    })
  }
  
  Search(){
    if(this.hoten==""){
      this.ngOnInit();
    }else{this.NhanvienList=this.NhanvienList.filter((res:any)=>{
      return res.hoten.toLocaleLowerCase().match(this.hoten.toLocaleLowerCase());
   });}
  }

  // ----------------------------------------------------------------------------------
  // angularFun(item:any){
  //   if(this.nhanvienService.gethsctnv(item.hosonhanvien)==null)
  //   {
  //     this.hide();
  //   }
  // }
}
