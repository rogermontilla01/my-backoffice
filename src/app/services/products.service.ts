import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  createProd(data) {
    return this.http.post(environment.endpoint + '/products/create', data, {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    });
  }

  getSubCategories() {
    return this.http.get(environment.endpoint + '/subcategory/list', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    });
  }

  getAllProducts(pageInfo=null) {
    let query='';
    //PageInfo en offset recibe pagina -1, cuando consulta a express lo envia por query string
    if(pageInfo){
      query='?page='+(pageInfo["offset"]+1)
    }
    return this.http.get(environment.endpoint + '/products/'+query, {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    });
  }

  deleteProducts(id) {
    return this.http.delete(environment.endpoint + '/products/delete-product/' + id, {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    });
  }
}
