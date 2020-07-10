import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
})
export class ViewCategoryComponent implements OnInit {
  rows: any = [];
  unir;

  ColumnMode = ColumnMode;

  constructor(private categoryService: ProductsService) {}

  ngOnInit(): void {
    this.getElements()
  }

  getElements(){
    this.categoryService.getCategories().subscribe((data) => {
      this.unir = data;
      console.log(this.unir);
    });

    this.categoryService.getSubCategories().subscribe((data) => {
      this.unir = this.unir.concat(data);
      console.log(this.unir);

      this.rows = this.unir.map((data) => {
        if (data.name == null) {
          data.name = data.subname;
        }
        if (data.subname != null) {
          data.treeStatus = 'disabled';
        } else {
          data.treeStatus = 'collapsed';
        }
        return data;
      });

      console.log(this.rows);
    });
  }

  onTreeAction(event: any) {
    const index = event.rowIndex;
    const row = event.row;
    if (row.treeStatus === 'collapsed') {
      row.treeStatus = 'expanded';
    } else {
      row.treeStatus = 'collapsed';
    }
    this.rows = [...this.rows];
  }

  deleteCategory(id, value) {
    if(value.subname == undefined){    
    this.categoryService.deleteCategory(id).subscribe((data) => {
      console.log(data);
      this.getElements()
    });
  }else{
    this.categoryService.deleteSubCategory(id).subscribe((data)=>{
      this.getElements()
      console.log(data)
    })
  }
  }
}
