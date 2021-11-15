import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API_URL = 'http://localhost:44880/api';
  // readonly PhotoUrl = "http://localhost:15330/Photos/khachhang";
  private userLogin = new BehaviorSubject({});
  public user$ = this.userLogin.asObservable();
  constructor(private readonly http: HttpClient) { }
  public get userValue(): any {
    return this.userLogin.value;
  }
  login(login: any): Observable<any> {
    const url = `${this.API_URL}/Login/login`;
    var log = JSON.stringify(login);
    return this.http.post<any>(url, log, httpOptions).pipe(
      map((user) => {
        //debugger;
        localStorage.setItem('user', JSON.stringify(user));
        this.userLogin.next(user);
      
        return user;
      })
    );
  }
  loginuser(login: any): Observable<any> {
    const url = `${this.API_URL}/Login/loginuser`;
    var log = JSON.stringify(login);
    return this.http.post<any>(url, log, httpOptions).pipe(
      map((user) => {
        //debugger;
        localStorage.setItem('user', JSON.stringify(user));
        this.userLogin.next(user);  
        return user;
      })
    );
  }
  register(user: any): Observable<number> {
    const url = `${this.API_URL}/Login/register`;
    var userString = JSON.stringify(user);
    return this.http.post<any>(url, userString, httpOptions);
  }
  logout() {
    localStorage.removeItem('user');
    this.userLogin.next(null!);
  }
}
