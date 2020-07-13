import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { NavbarService } from "../../../services/navbar.service";
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { MatSnackBar } from '@angular/material/snack-bar';


const URL = 'http://localhost:3000/products/upload-img/';
@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  
  imagesData;
  prodData;
  subcategoryData;
  prodForm: FormGroup;
  oldImg: string;

  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'photo',
    headers: [{ name: 'x-access-token', value: localStorage.getItem('token') }],
  });

  constructor(
    private fb: FormBuilder,
    private prodService: ProductsService,
    private route: Router,
    private activatedRouted: ActivatedRoute,
    private navBarService: NavbarService,
  ) {
    this.navBarService.setNavBarState('Products Edit')
    this.prodForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      sku: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      offert: ['', Validators.required],
      quantity: ['', Validators.required],
      subcategory: ['', Validators.required],
      featured: ['true', Validators.required],
      images:['']
    });
  }

  processSubmit(event){
    if(event){
      this.uploader.uploadAll();
    }
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
      this.prodForm.get('images').setValue(this.prodData.images)
      
      this.uploader.onAfterAddingFile = (file) => {
        file.withCredentials = false;
      };
      this.uploader.onCompleteItem = (
        item: any,
        response: any,
        status: any,
        headers: any
      ) => {
        let json = JSON.parse(response);
        this.imagesData = json['data'];
        
        this.prodForm.get('images').setValue(this.imagesData);
        this.uploadData()
      };

      console.log(this.prodData)
    });
    this.prodService.getSubCategories().subscribe(data=>{
      this.subcategoryData = data
    })
  }

  uploadData(){
    let id = this.activatedRouted.snapshot.paramMap.get('id')

    //Obtengo nombre de oldImg del queryParams
    this.activatedRouted.queryParams.subscribe(params =>{
      this.oldImg = params['oldImg']
    })
    //actualizar el producto y se manda el nombre de oldImg para ser elminado
    this.prodService.updateProd(id, this.prodForm.value, this.oldImg).subscribe(
      (data) => {
        console.log(data);
        this.route.navigate(['/list-products']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
