import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HosonhanvienService {
  readonly APIUrl="http://localhost:44880/api";
  constructor(private http:HttpClient) {    
  }
  getall():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/hosonhanvien');
  }
  getByid(id: any): Observable<any> {
    const url = `${this.APIUrl}/hosonhanvien/${id}`;
    return this.http.get<any>(url);
  }
  addHosonhanvien(val:any){
    return this.http.post(this.APIUrl+'/hosonhanvien',val);
  }

  updateHosonhanvien(val:any){
    return this.http.put(this.APIUrl+'/hosonhanvien',val);
  }

  deleteHosonhanvien(val:any){
    return this.http.delete(this.APIUrl+'/hosonhanvien/'+val);
  }
}
