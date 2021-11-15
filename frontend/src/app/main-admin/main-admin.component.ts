import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  // styleUrls: ['./main-admin.component.css']
})
export class MainAdminComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
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
