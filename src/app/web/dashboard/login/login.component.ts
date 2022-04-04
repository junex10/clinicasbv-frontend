import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from 'src/app/services';

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
    private fb: FormBuilder,
    private login: LoginService
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

  submit = () => {
    this.login.login(this.form.value).subscribe(
      (e) => console.log(e),
      err => console.error(err)
    )
  }

  get email() { return this.form.get('email')?.value }
  get password() { return this.form.get('password')?.value }
}
