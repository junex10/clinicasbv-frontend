import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CheckPermissionDTO,
  GetUserDTO
} from 'src/app/dtos';

const API = 'auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  setUser = (data: any) => window.sessionStorage.setItem('user', JSON.stringify(data))
  getUser = (): GetUserDTO => JSON.parse(window.sessionStorage.getItem('user') || JSON.stringify(``))?.data || false;

  checkPermissions = (form: CheckPermissionDTO) => this.http.post(`${API}checkPermissions`, form).toPromise();

}
