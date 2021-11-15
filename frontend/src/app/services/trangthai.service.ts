import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TrangthaiService {
  readonly APIUrl="http://localhost:44880/api";
  constructor(private http: HttpClient) { }
  getall():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/trangthai');
  }
  getByid(id: any): Observable<any> {
    const url = `${this.APIUrl}/trangthai/${id}`;
    return this.http.get<any>(url);
  }
  addTrangthai(val:any){
    return this.http.post(this.APIUrl+'/trangthai',val);
  }

  updateTrangthai(val:any){
    return this.http.put(this.APIUrl+'/trangthai',val);
  }

  deleteTrangthai(val:any){
    return this.http.delete(this.APIUrl+'/trangthai/'+val);
  }
}