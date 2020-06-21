import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  prodData;
  subcategoryData;
  prodForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private prodService: ProductsService,
    private route: Router,
    private activatedRouted: ActivatedRoute
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

  updateProd() {
    let id = this.activatedRouted.snapshot.paramMap.get('id')
    this.prodService.updateProd(id, this.prodForm.value).subscribe(
      (data) => {
        //Salio todo bien
        console.log(data);
        this.route.navigate(['/list-products']);
      },
      (err) => {
        //en caso de error
        alert(err);
      }
    );
  }

  ngOnInit(): void {
    let id = this.activatedRouted.snapshot.paramMap.get('id')
    this.prodService.getProdById(id).subscribe(data=>{
      this.prodData = data;
      this.prodForm.get('name').setValue(this.prodData.name)
      this.prodForm.get('sku').setValue(this.prodData.sku)
      this.prodForm.get('description').setValue(this.prodData.description)
      this.prodForm.get('price').setValue(this.prodData.price)
      this.prodForm.get('offert').setValue(this.prodData.offert)
      this.prodForm.get('quantity').setValue(this.prodData.quantity)
      this.prodForm.get('subcategory').setValue(this.prodData.subcategory)
      console.log(this.prodData)
    });
    this.prodService.getSubCategories().subscribe(data=>{
      this.subcategoryData = data
    })
  }

}
