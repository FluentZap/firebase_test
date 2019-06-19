import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { AuthGuard } from './auth-gaurd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthGuard]
})
export class AppComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.isLoggedIn = !!authService.user;
    // this.authService.user.subscribe(user => {
    //   if (user == null) {
    //     this.isLoggedIn = false;
    //     // this.router.navigate(['public']);
    //   } else {
    //     this.isLoggedIn = true;
    //     this.userName = user.displayName;
    //     this.router.navigate([]);
    //   }
    // });
  }

  ngDoCheck() {
    this.isLoggedIn = !!authService.user;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
