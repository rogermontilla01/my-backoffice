import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService  } from '../../services/products.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsData: any;
  displayedColumns: string[] = ['name', 'sku', 'description', 'price', 'offert', 'quantity', 'subcategory', 'featured', 'options'];
  dataSource: MatTableDataSource<prodElement>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private ProductsService:ProductsService, private route: Router) {}

  deleteStaff(){

  }

  // deleteStaff(data) {
  //   this.ProductsService.delete(data).subscribe((data) => {
  //     console.log(data);
  //     //Solicitar datos de nuevo:
  //     this.ProductsService.getAllStaff().subscribe((data) => {
  //       console.log(data);
  //       this.productsData = data['data'];
  //       this.dataSource = new MatTableDataSource(this.productsData);
  //       this.dataSource.paginator = this.paginator;
  //     });
  //   });
  // }

  ngOnInit(): void {
    this.ProductsService.getAllProducts().subscribe((data) => {
      console.log(data);
      this.productsData = data['docs'];
      this.dataSource = new MatTableDataSource(this.productsData);
      this.dataSource.paginator = this.paginator;
    });
  }

}

export interface prodElement {
  name: string;
  sku: string;
  description: string;
  price: number;
  offert: number;
  quantity: number;
  subcategory: string;
  featured: boolean;
}
