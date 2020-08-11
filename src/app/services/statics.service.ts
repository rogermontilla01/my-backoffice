import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaticsService {

  constructor(private http: HttpClient) {}

  getPages(){
    return this.http.get(environment.endpoint+ '/static')
  }

  updatePage(id, data) {
    return this.http.put(environment.endpoint + '/static/update/'+id, data);
  }
}
