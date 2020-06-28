import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
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
import { LoginComponent } from './login/login.component';
import { RegisterStaffComponent } from './staff/register-staff/register-staff.component';
import { ViewStaffComponent } from './staff/view-staff/view-staff.component';
import { EditStaffComponent } from './staff/edit-staff/edit-staff.component';
import { CreateProductsComponent } from './products/create-products/create-products.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { ViewCategoryComponent } from './category/view-category/view-category.component'



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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
