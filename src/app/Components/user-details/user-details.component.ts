import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  constructor(
    private builder: FormBuilder){}
  loginform = this.builder.group({
    fullName: this.builder.control('', Validators.required),});

}
