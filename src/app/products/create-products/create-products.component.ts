import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { FileUploader } from "ng2-file-upload";

const URL = 'http://localhost:3000/products/upload-img/'
@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css'],
})
export class CreateProductsComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  subcategoryData;
  prodForm: FormGroup;
  //Que hace esta variable???
  images:Array<any>=[];
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
      images:Validators.required,
    });
  }

  register() {
    this.uploader.uploadAll()
  }

  ngOnInit(): void {
    this.prodCreate.getSubCategories().subscribe(data=>{
      console.log(data)
      this.subcategoryData = data
    })

    this.uploader.onAfterAddingFile = (file)=>{ file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      let json =  JSON.parse(response);
      this.prodForm.get('images').setValue(json['data'])

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
    };
    
  }
}
