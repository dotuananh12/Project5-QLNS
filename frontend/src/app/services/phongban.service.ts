import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class PhongbanService {

 
  readonly APIUrl="http://localhost:44880/api";
  constructor(private http: HttpClient) { }
  getAll():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/phongban');
  }
  getByid(malop: any): Observable<any> {
    const url = `${this.APIUrl}/phongban/${malop}`;
    return this.http.get<any>(url);
  }
  // add(hp:any){
  //   return this.http.post(this.APIUrl+'/phongban/',hp);
  // }
  add(lophoc: any): Observable<number> {
    const url = `${this.APIUrl}/phongban`;
    var body = JSON.stringify(lophoc);
    return this.http.post<any>(url, body, httpOptions);
  }
  // update(hp:any){
  //   return this.http.put(this.APIUrl+'/phongban/',hp);
  // }
  
  delete(malop:any){
    return this.http.delete(this.APIUrl+'/phongban/'+malop);
  }
  update(malop: any, phongban: any): Observable<number> {
    const url = `${this.APIUrl}/phongban/${malop}`;
    var body = JSON.stringify(phongban);
    return this.http.put<any>(url, body, httpOptions);
  }

}
