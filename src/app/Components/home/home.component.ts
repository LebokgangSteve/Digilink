import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private service: AuthService) {}
}
