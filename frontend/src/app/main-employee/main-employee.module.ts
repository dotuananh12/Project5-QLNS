import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainEmployeeComponent } from './main-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
// import { TrangchuComponent } from './trangchu/trangchu.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

export const mainRoutes: Routes = [

  {
    path: '',
    component: MainEmployeeComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      // {
      //   path: 'trangchu',
      //   component:TrangchuComponent,
      // },
      {
        path: 'home',
        component: HomeComponent,
      },


      //
    ],
    //

  },
];
@NgModule({
  declarations: [
    HomeComponent,
    MainEmployeeComponent,
    // TrangchuComponent,
    //import

  ],
  imports: [
    CommonModule,
    FormsModule,//import
    ReactiveFormsModule,//import
    RouterModule.forChild(mainRoutes),//import
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    // CKEditorModule


  ],
  exports: [RouterModule,
    MatDatepickerModule,
    MatNativeDateModule],//import
})
export class MainEmployeeModule { }

