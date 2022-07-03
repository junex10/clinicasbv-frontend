import { Component, OnInit } from '@angular/core';
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

  constructor(
    private auth: AuthService,
    private petition: PetitionService
  ) { }

  ngOnInit(): void {

    this.load(this.page);
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
