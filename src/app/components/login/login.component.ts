import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
  
})
export class LoginComponent {

  credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        console.log('Login failed', error);
      }
    );
  }
}
