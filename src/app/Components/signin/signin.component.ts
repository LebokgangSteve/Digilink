import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  userdata: any;
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {
    sessionStorage.clear();
  }

  loginform = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  proceedlogin() {
    if (this.loginform.valid) {
      this.service.GetByCode(this.loginform.value.email).subscribe((res) => {
        this.userdata = res;
        if (this.userdata.password === this.loginform.value.password) {
          sessionStorage.setItem('username', this.userdata.id);
          this.router.navigate(['home']);
        } else {
          window.alert('Invalid credentials');
        }
      });
    } else {
      window.alert('Enter valid data');
    }
  }
}
