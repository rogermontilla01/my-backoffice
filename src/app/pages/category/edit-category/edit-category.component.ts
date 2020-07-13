import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { NavbarService } from '../../../services/navbar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit {
  subname: string;
  categoryData;
  subCategoryData;
  categoryForm: FormGroup;
  subCategoryForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private categoryService: ProductsService,
    private route: Router,
    private activatedRouted: ActivatedRoute,
    private navBarService: NavbarService,
  ) {
    this.navBarService.setNavBarState('Edit Category')
    //Formulario para categorias
    this.categoryForm = this.fb.group({
      category: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', Validators.required],
    });
    //Formulario para Subcategorias
    this.subCategoryForm = this.fb.group({
      subname: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', Validators.required],
      parent: ['', Validators.required],
    });
  }

  processCategory(event) {
    if(event){
    let id = this.activatedRouted.snapshot.paramMap.get('id');
    this.categoryService.updateCategory(id, this.categoryForm.value).subscribe(
      (data) => {
        this.route.navigate(['/view-category'])
      },
      (err) => {
        alert(err.error.msg);
      }
    );
  }
  }

  processSubCategory(event) {
    if(event){
    let id = this.activatedRouted.snapshot.paramMap.get('id');
    //Ejemplo con error en observable
    this.categoryService.updateSubCategory(id, this.subCategoryForm.value)
      .subscribe(
        (data) => {
          this.route.navigate(['/view-category'])
        },
        (err) => {
          alert(err.error.msg);
        }
      );}
  }

  ngOnInit(): void {
    this.updateElement();
  }

  updateElement() {
    //Identificar si es una Categoria o si es una Subcategoria
    let id = this.activatedRouted.snapshot.paramMap.get('id');
    this.activatedRouted.queryParams.subscribe((params) => {
      this.subname = params['subname'];
    });

    //Se ejecuta dependiendo de el tipo de elemento
    if (this.subname == undefined) {
      this.categoryService.getCategoryById(id).subscribe((data) => {
        this.categoryData = data;
        this.categoryForm.get('category').setValue(this.categoryData.category);
        this.categoryForm.get('description').setValue(this.categoryData.description);
      });
    } else {
      //obterner datos de las categorias
      this.categoryService.getCategories().subscribe(data=>{
        //Se ejecuta la busqueda de categoria para renderizar el selector de padre para la subcategoria
        this.categoryData = data
      })
      //Modificar el formulario
      this.categoryService.getSubCategoryById(id).subscribe(data=>{
        this.subCategoryData = data;
        this.subCategoryForm.get('subname').setValue(this.subCategoryData.subname)
        this.subCategoryForm.get('description').setValue(this.subCategoryData.description)
      })
    }
  }
}
