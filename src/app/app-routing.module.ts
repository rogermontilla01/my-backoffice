import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterStaffComponent } from './staff/register-staff/register-staff.component';
import { ViewStaffComponent } from './staff/view-staff/view-staff.component';
import { EditStaffComponent } from './staff/edit-staff/edit-staff.component';
import { CreateProductsComponent } from './products/create-products/create-products.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register-staff', component: RegisterStaffComponent },
  { path: 'view-staff', component: ViewStaffComponent },
  { path: 'edit-staff/:id', component: EditStaffComponent },
  { path: 'create-products', component: CreateProductsComponent },
  { path: 'list-products', component: ProductsListComponent },
  { path: 'products-edit/:id', component: ProductsEditComponent },
  { path: 'create-category', component: CreateCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
