import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  HTTP_OPTIONS
} from 'src/app/shared/commons/config';
import {
  LoginDTO
} from 'src/app/dtos';

const API = 'auth/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login = (form: LoginDTO) => this.http.post(`${API}login`, form, HTTP_OPTIONS)

}
