import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  ColumnMode = ColumnMode;
  rows: any[] = [];
  columns = [];
  page = {
    totalElements: 0,
    pageNumber: 0,
    size: 20,
  };

  productsData: any;

  constructor(private ProductsService: ProductsService, private route: Router) {
    this.page['pageNumber'] = 0;
    this.page['size'] = 20;
    this.columns = [
      { name: 'Name' },
      { name: 'SKU' },
      { name: 'Description' },
      { name: 'Price' },
      { name: 'Offert' },
      { name: 'Quantity' },
      { name: 'Subcategory', prop: 'subcategory.subname' },
      { name: 'Featured' },
    ];
  }

  setPage(pageInfo) {
    this.ProductsService.getAllProducts(pageInfo).subscribe((data) => {
      console.log(data);
      //REgistros de productos (Informacion)
      this.rows = data['docs'];
      console.log(this.rows);
      //Cantidad total de productos
      this.page['totalElements'] = data['totalDocs'];
      //Cantidad de registros por pagina
      this.page['size'] = data['limit'];
      //La pagina que estoy consultando
      this.page['pageNumber'] = pageInfo['offset'];
      console.log(this.page);
    });
  }

  //falta terminar
  deleteProd(id) {
    this.ProductsService.deleteProducts(id).subscribe((data) => {
      console.log(data);
      this.setPage({ offset: 0 });
    });
  }

  ngOnInit(): void {
    this.setPage({ offset: 0 });
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
