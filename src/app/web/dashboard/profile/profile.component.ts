import { Component, OnInit } from '@angular/core';
import { GetUserDTO } from 'src/app/dtos';
import { AuthService, PetitionService } from 'src/app/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: any[] = [];
  total: number = 0;
  header = ['ID', 'First name', 'Last name'];
  user: any;
  petitions: [] = [];

  constructor(
    private auth: AuthService,
    private petition: PetitionService
  ) { }

  ngOnInit(): void {

    this.load();
  }

  load = (page: any = 1) => {
    this.user = this.auth.getUser()?.user;
    this.petition.getPetitions(this.user.id, 1).subscribe(
      (data) => {
        console.log(data)
      }
    )
  }
  next = (page: number) => this.load(page);
}
