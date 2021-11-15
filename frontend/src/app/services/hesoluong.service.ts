import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HesoluongService {
  readonly APIUrl="http://localhost:44880/api";
  constructor(private http: HttpClient) { }
  getall():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/hesoluong');
  }
  getByid(id: any): Observable<any> {
    const url = `${this.APIUrl}/hesoluong/${id}`;
    return this.http.get<any>(url);
  }
  addHesoluong(val:any){
    return this.http.post(this.APIUrl+'/hesoluong',val);
  }

  updateHesoluong(val:any){
    return this.http.put(this.APIUrl+'/hesoluong',val);
  }

  deleteHesoluong(val:any){
    return this.http.delete(this.APIUrl+'/hesoluong/'+val);
  }

}