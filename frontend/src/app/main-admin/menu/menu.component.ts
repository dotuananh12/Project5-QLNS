import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  // styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }
  admin:any=[];
  hovaten:any;
  ngOnInit(): void {
    this.admin = JSON.parse(localStorage.getItem('user')|| '{}');
      this.hovaten =this.admin.name;
      console.log(this.admin.name);
      if(this.admin!=null){
        this.admin=parseInt(this.admin);
      }
  }
  logout() {
    this.loginService.logout();
    alert("đã đăng xuất");
    location.reload();
    setTimeout(() => {
      this.router.navigateByUrl('/admin/login');
    }, 1000);
  }

}

