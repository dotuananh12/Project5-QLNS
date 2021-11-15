import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BaohiemService {
  readonly APIUrl="http://localhost:44880/api";
  constructor(private http:HttpClient) {    
  }
  getall():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/baohiem');
  }
  getByid(id: any): Observable<any> {
    const url = `${this.APIUrl}/baohiem/${id}`;
    return this.http.get<any>(url);
  }
  getList(val: any): Observable<any> {
    const url = `${this.APIUrl}/baohiem/list/${val}`;
    return this.http.get<any>(url);
  }
  addBaohiem(val:any){
    return this.http.post(this.APIUrl+'/baohiem',val);
  }

  updateBaohiem(val:any){
    return this.http.put(this.APIUrl+'/baohiem',val);
  }

  deleteBaohiem(val:any){
    return this.http.delete(this.APIUrl+'/baohiem/'+val);
  }
  getnv():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/baohiem/getnv');
  }
}