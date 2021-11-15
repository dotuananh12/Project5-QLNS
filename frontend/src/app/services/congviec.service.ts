import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CongviecService {
  readonly APIUrl="http://localhost:44880/api";
  constructor(private http:HttpClient) {    
  }
  getall():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/congviec');
  }
  getByid(id: any): Observable<any> {
    const url = `${this.APIUrl}/congviec/${id}`;
    return this.http.get<any>(url);
  }
  getList(val: any): Observable<any> {
    const url = `${this.APIUrl}/congviec/list/${val}`;
    return this.http.get<any>(url);
  }
  addCongviec(val:any){
    return this.http.post(this.APIUrl+'/congviec',val);
  }

  updateCongviec(val:any){
    return this.http.put(this.APIUrl+'/congviec',val);
  }

  deleteCongviec(val:any){
    return this.http.delete(this.APIUrl+'/congviec/'+val);
  }
  getnv():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/congviec/getnv');
  }
}