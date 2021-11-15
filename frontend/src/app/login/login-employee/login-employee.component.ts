import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent implements OnInit {

  formLogin !: FormGroup ;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      pass: this.fb.control('', [
        Validators.required,
         Validators.minLength(6),
      ]),
    });
  }
  onLogin() {
    var userLogin = {
      name : this.formLogin.get('name')?.value ,
      pass: this.formLogin.get('pass') ?.value 
    };

    this.loginService
      .loginuser(userLogin)
    
      .subscribe(
        (user) => {
          if (user == null) {
            alert("tài khoản hoặc mật khẩu không chưa đúng ! ")
            this.clearFormLogin();
          } else if(user!="") {
            
           
            alert("Đăng nhập thành công .");
            setTimeout(() => {
              this.router.navigateByUrl('/user/home');
            }, 1000);
        
          }
          console.log(user);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  clearFormLogin() {
    this.formLogin.reset();
  }
}



