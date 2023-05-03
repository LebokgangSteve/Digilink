import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  email = '';
  password = '';

  onEmail(value: string) {
    this.email = value;
  }
  onPassword(value: string) {
    this.password = value;
  }
}
