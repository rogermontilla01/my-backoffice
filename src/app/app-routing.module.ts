import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterStaffComponent } from './register-staff/register-staff.component'
import { ViewStaffComponent } from './view-staff/view-staff.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register-staff', component: RegisterStaffComponent  },
  { path: 'view-staff', component:  ViewStaffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
