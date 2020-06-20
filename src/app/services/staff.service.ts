import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private http: HttpClient) {}

  Login(data) {
    return this.http.post(environment.endpoint + '/staff/login', data);
  }
  register(data) {
    return this.http.post(environment.endpoint + '/staff/create', data, {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    });
  }

  updateStaff(id, value) {
    return this.http.put(environment.endpoint+'/staff/update/'+id, value, {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      }
    }
    );
  }

  getAllStaff() {
    return this.http.get(environment.endpoint + '/staff', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    });
  }
  getStaffById(id) {
    return this.http.get(environment.endpoint + '/staff/' + id, {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    });
  }
  delete(data) {
    return this.http.delete(environment.endpoint + '/staff/delete/' + data, {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    });
  }
}
