import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``,
})
export class LoginPageComponent {
  user = new FormControl('');
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogin(): void {
    console.log(this.user.value);
    this.authService
      .login('daniel2667@hotmail.es', '12251619')
      .subscribe((user) => {
        this.router.navigate(['/']);
      });
  }
}
