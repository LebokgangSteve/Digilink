import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private builder: FormBuilder, private service: AuthService) {}

  emailX: any;
  nameX: any;
  passwordX: any;
  confirmPasswordX: any;
  roleX: any;
  usersX: any;

  ngOnInit(): void {
    this.usersX = this.service.GetByCode(sessionStorage.getItem('username'));
    console.log(this.usersX);
  }

  update() {
    this.emailX = this.usersX.id;
    this.nameX = this.usersX.fullName;
    this.passwordX = this.usersX.password;
    this.confirmPasswordX = this.usersX.confirmPassword;
    this.roleX = this.usersX.role;
  }
}
