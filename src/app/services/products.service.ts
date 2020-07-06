import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  createProd(data) {
    return this.http.post(environment.endpoint + '/products/create', data);
  }

  updateProd(id, data) {
    return this.http.put(environment.endpoint + '/products/'+id, data);
  }

  getProdById(id){
    return this.http.get(environment.endpoint + '/products/' + id);
  }

  getAllProducts(pageInfo=null) {
    let query='';
    //PageInfo en offset recibe pagina -1, cuando consulta a express lo envia por query string
    if(pageInfo){
      query='?page='+(pageInfo["offset"]+1)
    }
    return this.http.get(environment.endpoint + '/products/'+query);
  }

  deleteProducts(id) {
    return this.http.delete(environment.endpoint + '/products/delete-product/' + id);
  }

  /* Category Methods */

  createCategory(data){
    return this.http.post(environment.endpoint+'/category/create', data)
  }

  createSubCategory(data){
    return this.http.post(environment.endpoint+'/subcategory/create-subcategory', data)
  }

  getSubCategories() {
    return this.http.get(environment.endpoint + '/subcategory/list');
  }

  getCategories() {
    return this.http.get(environment.endpoint + '/category/list');
  }

  deleteCategory(id){
    return this.http.delete(environment.endpoint+ '/category/delete/'+id)
  }

  deleteSubCategory(id){
    return this.http.delete(environment.endpoint+ '/subcategory/delete/'+id)
  }

  getCategoryById(id){
    return this.http.get(environment.endpoint+'/category/getone/'+id)
  }

  getSubCategoryById(id){
    return this.http.get(environment.endpoint+'/subcategory/getone/'+id)
  }

  updateCategory(id, data){
    return this.http.put(environment.endpoint+'/category/update/'+id, data)
  }

  updateSubCategory(id, data){
    return this.http.put(environment.endpoint+'/subcategory/update/'+id, data)
  }
  
}
