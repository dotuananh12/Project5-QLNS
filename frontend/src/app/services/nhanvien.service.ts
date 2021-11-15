import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NhanvienService {
  readonly APIUrl="http://localhost:44880/api";
  readonly PhotoUrl = "http://localhost:44880/Photos/";
  constructor(private http:HttpClient) { }
  getNhanvien():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/nhanvien');
  }
  addNhanvien(val:any){
    return this.http.post(this.APIUrl+'/nhanvien',val);
  }

  updateNhanvien(val:any){
    return this.http.put(this.APIUrl+'/nhanvien',val);
  }

  deleteNhanvien(val:any){
    return this.http.delete(this.APIUrl+'/nhanvien/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/nhanvien/SaveFile',val);
  }

  gettrangthai():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/nhanvien/gettrangthai');
  }
  getphongban():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/nhanvien/getphongban');
  }
  getchucvu():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/nhanvien/getchucvu');
  }
  gethsnv():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/nhanvien/gethsnv');
  }
  gethsl():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/nhanvien/gethsl');
  }
  // gethsctnv(val:any):Observable<any[]>{
  //   return this.http.get<any[]>(this.APIUrl+'/nhanvien/geths/'+ val);
  // }
  gethsctnv(hosonhanvien: any): Observable<any> {
    const url = `${this.APIUrl}/nhanvien/geths/${hosonhanvien}`;
    return this.http.get<any>(url);
  }
  getctnv(val: any): Observable<any> {
    const url = `${this.APIUrl}/nhanvien/getbyid/${val}`;
    return this.http.get<any>(url);
  }
  getctcv(machucvu: any): Observable<any> {
    const url = `${this.APIUrl}/nhanvien/getctcv/${machucvu}`;
    return this.http.get<any>(url);
  }
  getctpb(maphongban: any): Observable<any> {
    const url = `${this.APIUrl}/nhanvien/getctpb/${maphongban}`;
    return this.http.get<any>(url);
  }
}

