import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './pages/login/login.component';
import { RegisterStaffComponent } from './pages/staff/register-staff/register-staff.component';
import { ViewStaffComponent } from './pages/staff/view-staff/view-staff.component';
import { EditStaffComponent } from './pages/staff/edit-staff/edit-staff.component';
import { CreateProductsComponent } from './pages/products/create-products/create-products.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProductsEditComponent } from './pages/products/products-edit/products-edit.component';
import { CreateCategoryComponent } from './pages/category/create-category/create-category.component';
import { ViewCategoryComponent } from './pages/category/view-category/view-category.component';
import { EditCategoryComponent } from './pages/category/edit-category/edit-category.component'
import { FileUploadModule } from "ng2-file-upload";
import { InterceptorsService } from "./services/interceptors.service";
import { FormProductsComponent } from './pages/products/form-products/form-products.component';
import { FormStaffComponent } from './pages/staff/form-staff/form-staff.component';
import { FormCategoryComponent } from './pages/category/form-category/form-category.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterStaffComponent,
    ViewStaffComponent,
    EditStaffComponent,
    CreateProductsComponent,
    ProductsListComponent,
    ProductsEditComponent,
    CreateCategoryComponent,
    ViewCategoryComponent,
    EditCategoryComponent,
    FormProductsComponent,
    FormStaffComponent,
    FormCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    FileUploadModule,
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorsService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
