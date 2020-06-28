import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
})
export class ViewCategoryComponent implements OnInit {
  rows: any = [];
  categoryData;
  subCategoryData;
  unir = [];

  ColumnMode = ColumnMode;

  constructor(private categoryService: ProductsService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.unir = this.unir.concat(data);
      console.log(this.unir);
    });

    this.categoryService.getSubCategories().subscribe((data) => {
      this.unir = this.unir.concat(data);
      console.log(this.unir);

      this.rows = this.unir.map((data) => {
        var info = data;
        if (info.name == null) {
          info.name = info.subname;
        }
        if (info.subname != null) {
          info.treeStatus = 'disabled';
        } else {
          info.treeStatus = 'collapsed';
        }
        return info;
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
    });
  }else{
    this.categoryService.deleteSubCategory(id).subscribe((data)=>{
      console.log(data)
    })
  }
  }
}
