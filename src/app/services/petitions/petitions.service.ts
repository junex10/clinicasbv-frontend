import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CheckPermissionDTO,
  GetUserDTO,
  ResetParamsDTO
} from 'src/app/dtos';
import { IAUTH } from 'src/app/interfaces';
import { Router } from '@angular/router';

const API = 'petition/';

@Injectable({
  providedIn: 'root'
})
export class PetitionService {

  constructor(
    private http: HttpClient
  ) { }


  getPetitions = (user_id: number, page: number) => this.http.get(`${API}getPetitions/${user_id}/${page}`);
}
