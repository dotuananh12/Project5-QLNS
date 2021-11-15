import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HosonhanvienService } from 'src/app/services/hosonhanvien.service';
import { LoginService } from 'src/app/services/login.service';
import { NhanvienService } from 'src/app/services/nhanvien.service';
import { CongviecService } from 'src/app/services/congviec.service';
import { KhieunaiService } from 'src/app/services/khieunai.service';
import { BaohiemService } from 'src/app/services/baohiem.service';
import { TrocapService } from 'src/app/services/trocap.service';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private trocapService: TrocapService,private baohiemService: BaohiemService,private khieunaiService: KhieunaiService,private loginuserService:LoginService,private router:Router,private nhanvienService: NhanvienService,private hosonhanvienService: HosonhanvienService,private congviecService: CongviecService,private loginService:LoginService) { }
  user:any=[];
  hovaten:any;
  img:any;
  hosonhanvien:any;
  trangthai:any;
  maphongban:any;
  machucvu:any;
  mahesoluong:any;
  kyhieunv:any;
  mk:any;
  //////////////////////////
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
  //////////////////////////
 
  idnhanvien:any;
  ngaykhieunai:any;
  noidung:any;
  hoidap:any;
  trangthaii:any;
  dskn:any;
  khieunais: any = [];
  searchText: any;
  display: any = false;
  page: any = 1;
  ModalTitle: any = "";
  totalLength: any;
  //////////////////////////
  HosoList: any=[];
  GetctnvList: any=[];
  GetctcvList: any=[];
  GetctpbList: any=[];
  GetList: any=[];
  GetbhList: any=[];
  GettcList: any=[];

  tongtc:any;
  tongbaohiem:any;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')|| '{}');
    console.log(this.user);
      this.hovaten =this.user.hoten;
      this.img=this.user.img;
      this.hosonhanvien=this.user.hosonhanvien;
      this.trangthai=this.user.trangthai;
      this.maphongban=this.user.maphongban;
      this.machucvu=this.user.machucvu;
      this.mahesoluong=this.user.mahesoluong;
      this.kyhieunv=this.user.kyhieunv;
      this.mk=this.user.mk;
      this.idnhanvien=this.user.id

      if(this.user.maphongban!==null && this.user.maphongban!==undefined){
        this.getctpbList(this.user.maphongban);
      }
      if(this.user.hosonhanvien!==null && this.user.hosonhanvien!==undefined){
        this.gethsList(this.user.hosonhanvien);
      }
      if(this.user.machucvu!==null && this.user.machucvu!==undefined){
        this.getctcvList(this.user.hosonhanvien);
      }
      if(this.user.id!==null && this.user.id!==undefined){
        this.getList(this.user.id);
      }
      if(this.user.id!==null && this.user.id!==undefined){
        this.khieunaiList(this.user.id);
      }
      if(this.user.id!==null && this.user.id!==undefined){
        this.getbhList(this.user.id);
      }
      if(this.user.id!==null && this.user.id!==undefined){
        this.gettcList(this.user.id);
      }

      console.log(this.user.hoten);
      if(this.user!=null){
        this.user=parseInt(this.user);
      }
      //////////////////////////
  
  }
  
  gethsList(item:any){
    console.log(item);
    this.nhanvienService.gethsctnv(item).subscribe(data =>{
      this.HosoList=data;
      console.log(data.kyhieunv);
    })
  }
  getctnvList(item:any){
    this.nhanvienService.getctnv(item).subscribe(data=>{
      this.GetctnvList=data;
    })
  }
  getctcvList(item:any){
    this.nhanvienService.getctcv(item).subscribe(data=>{
      this.GetctcvList=data;
    })
  }
  getctpbList(item:any){
    console.log(item);
    this.nhanvienService.getctpb(item).subscribe(data=>{
      this.GetctpbList=data;
      console.log(data.ten);
    })
  }
  getList(item:any){
    this.congviecService.getList(item).subscribe(data=>{
      this.GetList=data;
      // console.log(data.ngaynop)
    })
  }
  khieunaiList(item:any) {
    this.khieunaiService.getknList(item).subscribe(data => {
      this.khieunais = data;
      console.log(this.khieunais);
    });
  }
  getbhList(item:any){
    this.baohiemService.getList(item).subscribe(data=>{
      this.GetbhList=data;
      this.tongbaohiem = 0;
      for (let p of data) {
        this.tongbaohiem += p.mucphi;
      }
      console.log(this.tongbaohiem)
    })
  }
  gettcList(item:any){
    this.trocapService.getList(item).subscribe(data=>{
      this.GettcList=data;
      this.tongtc = 0;
      for (let p of data) {
        this.tongtc += p.giatri;
      }
      console.log(this.tongtc)
    })
  }
  add(item:any) {
    var val = {
      id: this.id,
      idnhanvien: this.idnhanvien,
      ngaykhieunai: this.ngaykhieunai,
      noidung:this.noidung,
      trangthai: this.trangthai,
      hoidap: this.hoidap
      
    };
    this.khieunaiService.addKhieunai(val).subscribe((data: any) => {
      alert(data.toString());
      location.reload();
    })
  }
  closeClick() {
    this.display = false;
    this.khieunaiList;
  }
  logout() {
    this.loginService.logout();
    alert("đã đăng xuất");
    location.reload();
    setTimeout(() => {
      this.router.navigateByUrl('/user/login');
    }, 1000);
  }
 
}



