import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  authState = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
    //en caso de que ya exista el token
    if(localStorage.getItem('token')){
      this.authState.next(true)
    }
  }

  Login(data) {
    return this.http.post(environment.endpoint + '/staff/login', data);
  }

  Logout() {
    localStorage.removeItem('token');
    this.authState.next(false);
  }

  register(data) {
    return this.http.post(environment.endpoint + '/staff/create', data);
  }

  updateStaff(id, value) {
    return this.http.put(environment.endpoint + '/staff/update/' + id, value);
  }

  getAllStaff() {
    return this.http.get(environment.endpoint + '/staff');
  }
  getStaffById(id) {
    return this.http.get(environment.endpoint + '/staff/' + id);
  }
  delete(data) {
    return this.http.delete(environment.endpoint + '/staff/delete/' + data);
  }

  //BehaviorSubject

  authenticate() {
    this.authState.next(true);
  }
  //Me suscribo a este observable 
  isAuthenticate() {
    return this.authState;
  }
}
