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
import { ViewCategoryComponent } from './category/view-category/view-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register-staff', canActivate:[AuthGuard],component: RegisterStaffComponent },
  { path: 'view-staff', canActivate:[AuthGuard],component: ViewStaffComponent },
  { path: 'edit-staff/:id', canActivate:[AuthGuard],component: EditStaffComponent },
  { path: 'create-products', canActivate:[AuthGuard],component: CreateProductsComponent },
  { path: 'list-products', canActivate:[AuthGuard],component: ProductsListComponent },
  { path: 'products-edit/:id', canActivate:[AuthGuard],component: ProductsEditComponent },
  { path: 'create-category', canActivate:[AuthGuard],component: CreateCategoryComponent },
  { path: 'view-category', canActivate:[AuthGuard],component: ViewCategoryComponent },
  { path: 'category-edit/:id', canActivate:[AuthGuard],component: EditCategoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
