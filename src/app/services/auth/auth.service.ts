import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setUser = (data: any) => window.sessionStorage.setItem('user', JSON.stringify(data))
  getUser = () => JSON.parse(window.localStorage.getItem('user') || ``);
}
