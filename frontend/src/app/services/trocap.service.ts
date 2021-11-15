import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrocapService {
  readonly APIUrl="http://localhost:44880/api";
  constructor(private http:HttpClient) {    
  }
  getall():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/trocap');
  }
  getByid(id: any): Observable<any> {
    const url = `${this.APIUrl}/trocap/${id}`;
    return this.http.get<any>(url);
  }
  getList(val: any): Observable<any> {
    const url = `${this.APIUrl}/trocap/list/${val}`;
    return this.http.get<any>(url);
  }
  addTrocap(val:any){
    return this.http.post(this.APIUrl+'/trocap',val);
  }

  updateTrocap(val:any){
    return this.http.put(this.APIUrl+'/trocap',val);
  }

  deleteTrocap(val:any){
    return this.http.delete(this.APIUrl+'/trocap/'+val);
  }
  getnv():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/trocap/getnv');
  }
}