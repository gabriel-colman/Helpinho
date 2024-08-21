import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  authForm: FormGroup;
  isLogin = true;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: [''],
      phone: ['']
    });
  }

  toggleMode(): void {
    this.isLogin = !this.isLogin;
  }

  onSubmit(): void {
    if (this.authForm.valid) {
      if (this.isLogin) {
        this.authService.login(this.authForm.value).subscribe();
      } else {
        this.authService.register(this.authForm.value).subscribe();
      }
    }
  }
}
