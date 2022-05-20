import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: any[] = [];
  total: number = 0;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {

    this.load();
  }

  load = (page: any = 1) => {
    this.auth.getUsers(page).subscribe(
      (items: any) => {
        this.data = items.data.users;
        this.total = items.data.count;
      }
    )
  }
  next = (page: number) => this.load(page);
}
