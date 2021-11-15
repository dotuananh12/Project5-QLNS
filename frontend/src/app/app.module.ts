import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { MainEmployeeComponent } from './main-employee/main-employee.component';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { LoginEmployeeComponent } from './login/login-employee/login-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormGroup,FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { HomeComponent } from './main-employee/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
   
    // MainEmployeeComponent,
    // MainAdminComponent,
    LoginAdminComponent,
    LoginEmployeeComponent,
    // HomeComponent,
    


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  //
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
