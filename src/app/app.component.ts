import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  title = 'Project2';
  isRequired: any;
  constructor(private router: Router, private service: AuthService) {}
  logOut() {
    sessionStorage.clear();
    this.router.navigate(['signin']);
  }

  checkRole() {
    if (sessionStorage.getItem('userrole') === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  ngDoCheck(): void {
    let currentUrl = this.router.url;

    if (currentUrl == '/signin' || currentUrl == '/signup') {
      this.isRequired = false;
    } else {
      this.isRequired = true;
    }
  }

  getFullName() {
    return 'Welcome ' + sessionStorage.getItem('fullName');
  }
}
