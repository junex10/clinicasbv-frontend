import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AuthService, PetitionService, ProfileService } from 'src/app/services';
import Swal from 'sweetalert2';
import {
  SwalAlerts
} from 'src/app/shared';
import * as moment from 'moment';

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

  form: FormGroup;

  openEditModal: boolean = false;

  editUserStyle: NgbModalOptions = {
    size: 'xl'
  };

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private petition: PetitionService,
    private profile: ProfileService
  ) { 
    this.form = this.fb.group({
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      name: [null, Validators.required],
      lastname: [null],
      phone: [null],
      address: [null],
      birthdate: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.load(this.page);
  }

  load = (page: any = 1) => {
    this.user = this.auth.getUser()?.user;

    this.form.get('email')?.setValue(this.user.email);
    this.form.get('name')?.setValue(this.user.person.name);
    this.form.get('lastname')?.setValue(this.user.person.lastname);
    this.form.get('phone')?.setValue(this.user.person.phone);
    this.form.get('address')?.setValue(this.user.person.address);
    this.form.get('birthdate')?.setValue(moment(this.user.person.birthdate).toDate());

    this.petition.getPetitions(page).subscribe(
      (item) => {
        this.data = item.data.petitions;
        this.total = item.data.count;
      }
    )
  }
  next = (page: number) => this.load(page);

  openEdit = () => this.openEditModal = true;

  submit = () => {
    if (this.form.invalid) {
      Swal.fire(SwalAlerts.swalCustom(
        `<div>
          <h4 class='text-center'>Formulario inválido</h4>
          <p style='font-size: 15px;' class='mt-4'>Hay errores en el formulario, verifique antes de enviar</p>
        </div>`,
        {
          showCancelButton: false,
          showConfirmButton: false,
          timer: 3000,
          icon: 'error'
        }
      ));
      return;
    } else {
      this.profile.updateUser({
        ...this.form.value,
        id: this.user.id
      })
      .then(async value => {
        Swal.fire(SwalAlerts.swalSuccess('Perfil', 'Perfil actualizado!'));
        this.auth.removeUser();
        await this.auth.setUser(value);
        this.user = this.auth.getUser()?.user;
      });
    }
  }

  get email() { return this.form.get('email')?.value }
  get name() { return this.form.get('name')?.value }
  get lastname() { return this.form.get('lastname')?.value }
  get phone() { return this.form.get('phone')?.value }
  get address() { return this.form.get('address')?.value }
  get birthdate() { return this.form.get('birthdate')?.value }
}
