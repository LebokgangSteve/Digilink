import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { AuthService } from 'src/app/service/auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: AuthService
  ) {}

  emailX: any;
  nameX: any;
  passwordX: any;
  confirmPasswordX: any;
  roleX: any;
  usersX: any;

  ngOnInit(): void {
    this.service
      .GetByCode(sessionStorage.getItem('username'))
      .subscribe((res) => {
        this.usersX = res;
      });
  }

  update() {
    console.log('Update');
    console.log(sessionStorage.getItem('username'));
    this.emailX = this.usersX.id;
    this.nameX = this.usersX.fullName;
    this.passwordX = this.usersX.password;
    this.confirmPasswordX = this.usersX.confirmPassword;
    this.roleX = this.usersX.role;
  }
}
