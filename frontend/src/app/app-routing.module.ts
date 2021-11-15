import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './article/auth.guard';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { LoginEmployeeComponent } from './login/login-employee/login-employee.component';


const routes: Routes = [
  {path:"",component:LoginAdminComponent},
  {path:"admin/login",component:LoginAdminComponent},
  {path:"user/login",component:LoginEmployeeComponent},
  //
  {
    path: 'admin',
    loadChildren: () => import('./main-admin/main-admin.module').then((m) => m.MainAdminModule),canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./main-employee/main-employee.module').then((m) => m.MainEmployeeModule),canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
