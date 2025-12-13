import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  imports: [FormsModule],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.scss',
})
export class Loginpage {
  message: string = '';
  router = inject(Router);
  loginForm: LoginForm = {
    username: '',
    password: '',
    keepMe: false
  };
  check() {
    if (this.loginForm.username == 'fatemeh' && this.loginForm.password == '1384') {
      sessionStorage.setItem('auth-token', 'dgdhgigejdgiueyiuejkgjwhgugug');
      if (this, this.loginForm.keepMe == true) {
        localStorage.setItem('auth-token', 'dgdhgigejdgiueyiuejkgjwhgugug');
      }
      this.router.navigateByUrl('private');
    }
    else {
      this.message = 'نام کاربری و پسورد صحیح نیست ';
    }

  }
}

interface LoginForm {
  username: string;
  password: string;
  keepMe: boolean;
}

