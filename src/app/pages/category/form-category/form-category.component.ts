import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {

  @Input() categoryData;
  @Input() categoryForm;
  @Input() subCategoryForm;

  @Output() submitFormCategory = new EventEmitter<boolean>()
  @Output() submitFormSubCategory = new EventEmitter<boolean>()

  constructor() { }

  formSubmitCategory(){
    this.submitFormCategory.emit(true)
  }
  formSubmitSubCategory(){
    this.submitFormSubCategory.emit(true)
  }

  ngOnInit(): void {
  }

}
