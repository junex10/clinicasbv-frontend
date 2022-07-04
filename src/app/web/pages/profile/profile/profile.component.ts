import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, PetitionService } from 'src/app/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: any[] = [];
  total: number = 0;
  header = ['#', 'Proceso', 'Fecha'];
  user: any;
  petitions: [] = [];
  page: number = 1;

 // form: FormGroup;

  constructor(
    //private fb: FormBuilder,
    private auth: AuthService,
    private petition: PetitionService
  ) { 
    /*this.form = this.fb.group({
      email: [null, [
        Validators.required,
        Validators.email
      ]]
    })*/
  }

  ngOnInit(): void {

    this.load(this.page);
    console.log(this.user, ' AQUI ')
  }

  load = (page: any = 1) => {
    this.user = this.auth.getUser()?.user;
    this.petition.getPetitions(page).subscribe(
      (item) => {
        this.data = item.data.petitions;
        this.total = item.data.count;
      }
    )
  }
  next = (page: number) => this.load(page);
}
