import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChucvuService {
  readonly APIUrl="http://localhost:44880/api";
  constructor(private http: HttpClient) { }
  getall():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/chucvu');
  }
  getByid(id: any): Observable<any> {
    const url = `${this.APIUrl}/chucvu/${id}`;
    return this.http.get<any>(url);
  }
  addChucvu(val:any){
    return this.http.post(this.APIUrl+'/chucvu',val);
  }

  updateChucvu(val:any){
    return this.http.put(this.APIUrl+'/chucvu',val);
  }

  deleteChucvu(val:any){
    return this.http.delete(this.APIUrl+'/chucvu/'+val);
  }

}