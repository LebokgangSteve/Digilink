import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiurl = 'http://localhost:3000/user';
  apiurldeleted = 'http://localhost:3000/deletedUsers';

  GetAll() {
    return this.http.get(this.apiurl);
  }
  GetAllRole() {
    return this.http.get('http://localhost:3000/role');
  }
  GetByCode(code: any) {
    return this.http.get(this.apiurl + '/' + code);
  }
  ProceedRegistration(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);
  }

  UpdateUser(code: any, inputdata: any) {
    console.log('updatte');
    return this.http.put<any>(this.apiurl + '/' + code, inputdata);
  }

  isLoggedIn() {
    return sessionStorage.getItem('username') != null;
  }

  delete(data: any) {
    return this.http.delete(this.apiurl + '/' + data);
  }

  deletedUsers(inputdata: any) {
    return this.http.post(this.apiurldeleted, inputdata);
  }

  disableUser() {
    return sessionStorage.getItem('username') != null;
  }
  getUserRole() {
    if (sessionStorage.getItem('role') != null) {
      return false;
    } else {
      return true;
    }
  }
}
