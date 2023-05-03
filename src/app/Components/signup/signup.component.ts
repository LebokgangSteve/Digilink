import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService
  ) {}

  registerform = this.builder.group({
    fullName: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required])),
    password: this.builder.control(
      '',
      Validators.compose([Validators.required])
    ),
    confirmPassword: this.builder.control(
      '',
      Validators.compose([Validators.required])
    ),
  });

  proceedRegistration() {
    if (this.registerform.valid) {
    } else {
      this.toastr.warning('Please enter valid data');
    }
  }

  // checking input box
  onFullName(value: string) {
    this.fullName = value;
  }
  onEmail(value: string) {
    this.email = value;
    email: this.builder.control('', Validators.compose([Validators.required]));
  }
  onPassword(value: string) {
    this.password = value;
  }

  onConfirmPassword(value: string) {
    this.confirmPassword = value;
  }
}
