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
}
