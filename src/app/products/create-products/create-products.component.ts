import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css'],
})
export class CreateProductsComponent implements OnInit {
  subcategoryData;
  prodForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private prodCreate: ProductsService,
    private route: Router
  ) {
    this.prodForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      sku: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      offert: ['', Validators.required],
      quantity: ['', Validators.required],
      subcategory: ['', Validators.required],
      featured: ['true', Validators.required],
    });
  }

  register() {
    console.log(this.prodForm.value);
    //Ejemplo con error en observable
    this.prodCreate.createProd(this.prodForm.value).subscribe(
      (data) => {
        //Salio todo bien
        console.log(data);
        this.prodForm.reset()
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
