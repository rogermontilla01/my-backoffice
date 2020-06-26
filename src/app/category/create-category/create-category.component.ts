import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  subcategoryData;
  categoryForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private prodCreate: ProductsService,
    private route: Router
  ) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', Validators.required],
    });
  }

  register() {
    console.log(this.categoryForm.value);
    //Ejemplo con error en observable
    this.prodCreate.createProd(this.categoryForm.value).subscribe(
      (data) => {
        //Salio todo bien
        console.log(data);
        this.categoryForm.reset()
      },
      (err) => {
        //en caso de error
        alert(err.error.msg);
      }
    );
  }

  ngOnInit(): void {
    this.prodCreate.getSubCategories().subscribe(data=>{
      console.log(data)
      this.subcategoryData = data
    })
  }

}
