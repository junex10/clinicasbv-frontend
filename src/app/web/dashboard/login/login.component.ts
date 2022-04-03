import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logo: string = 'assets/img/logo.png';

  visibility: string = 'password';

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(6)
      ]]
    })
  }

  ngOnInit(): void {

  }

  switchVisibility = () => this.visibility = this.visibility === 'password' ? 'text' : 'password';

  get email() { return this.form.get('email')?.value }
  get password() { return this.form.get('password')?.value }
}
