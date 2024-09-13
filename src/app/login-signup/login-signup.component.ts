import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent {
  username = '';
  password = '';
  isLogin = true;

  constructor(private router: Router) {}

  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  loginSignup() {
    let users = JSON.parse(localStorage.getItem('users') || '{}');

    if (this.isLogin) {
      // Login
      if (users[this.username] && users[this.username].password === this.password) {
        localStorage.setItem('currentUser', this.username); // Store the current user
        this.router.navigate(['/welcome']);
      } else {
        alert('Invalid credentials');
      }
    } else {
      // Sign Up
      users[this.username] = { password: this.password };
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', this.username); // Store the current user
      this.router.navigate(['/welcome']);
    }
  }
}
