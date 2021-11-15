import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class KhieunaiService {
  readonly APIUrl="http://localhost:44880/api";
  constructor(private http:HttpClient) {    
  }
  getall():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/khieunai');
  }
  getByid(id: any): Observable<any> {
    const url = `${this.APIUrl}/khieunai/${id}`;
    return this.http.get<any>(url);
  }
  getknList(val: any): Observable<any> {
    const url = `${this.APIUrl}/khieunai/list/${val}`;
    return this.http.get<any>(url);
  }
  addKhieunai(val:any){
    return this.http.post(this.APIUrl+'/khieunai',val);
  }

  updateKhieunai(val:any){
    return this.http.put(this.APIUrl+'/khieunai',val);
  }

  deleteKhieunai(val:any){
    return this.http.delete(this.APIUrl+'/khieunai/'+val);
  }
  
}