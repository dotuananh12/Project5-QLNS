import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainAdminComponent } from './main-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { PhongbanComponent } from './phongban/phongban.component';
import { FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChucvuComponent } from './chucvu/chucvu.component';
import { HesoluongComponent } from './hesoluong/hesoluong.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { AddEditNhaComponent } from './nhanvien/add-edit-nha/add-edit-nha.component';
import { HosonhanvienComponent } from './hosonhanvien/hosonhanvien.component';
import { TrangthaiComponent } from './trangthai/trangthai.component';
import { CongviecComponent } from './congviec/congviec.component';
import { KhieunaiComponent } from './khieunai/khieunai.component';
import { BaohiemComponent } from './baohiem/baohiem.component';

import { TrocapComponent } from './trocap/trocap.component';

export const mainRoutes: Routes = [

  {
    path: '',
    component: MainAdminComponent,
    children: [
      {
        path: '',
        component:HomeComponent,
      },
      //
      {
        path: 'home',
        component:HomeComponent,
      },
      {
        path: 'phongban',
        component:PhongbanComponent,
      },
      //
      {
        path: 'chucvu',
        component:ChucvuComponent,
      },
      {
        path: 'hesoluong',
        component:HesoluongComponent,
      },
      {
        path: 'nhanvien',
        component:NhanvienComponent,
      },
      {
        path: 'hosonhanvien',
        component:HosonhanvienComponent,
      },
      {
        path: 'trangthai',
        component:TrangthaiComponent,
      },
      {
        path: 'congviec',
        component:CongviecComponent,
      },
      {
        path: 'khieunai',
        component:KhieunaiComponent,
      },
      {
        path: 'baohiem',
        component: BaohiemComponent,
      },
      {
        path: 'trocap',
        component: TrocapComponent,
      },
    ],
    //

  },
];


@NgModule({
  declarations: [
    HomeComponent,
    MainAdminComponent,
    PhongbanComponent,
    MenuComponent,
    ChucvuComponent,
    HesoluongComponent,
    NhanvienComponent,
    AddEditNhaComponent,
    HosonhanvienComponent,
    TrangthaiComponent,
    CongviecComponent,
    KhieunaiComponent,//import
    BaohiemComponent,
    TrocapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,//import
    ReactiveFormsModule,//import
    RouterModule.forChild(mainRoutes),//import
    Ng2SearchPipeModule,
    NgxPaginationModule 
  ],
  exports: [RouterModule],//import
})
export class MainAdminModule { }
