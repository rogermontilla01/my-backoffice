import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterStaffComponent } from './staff/register-staff/register-staff.component';
import { ViewStaffComponent } from './staff/view-staff/view-staff.component';
import { EditStaffComponent } from './staff/edit-staff/edit-staff.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register-staff', component: RegisterStaffComponent },
  { path: 'view-staff', component: ViewStaffComponent },
  { path: 'edit-staff/:id', component: EditStaffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
