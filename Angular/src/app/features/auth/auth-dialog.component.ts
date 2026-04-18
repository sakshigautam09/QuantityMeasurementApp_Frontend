import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-auth-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent {
  private fb        = inject(FormBuilder);
  private auth      = inject(AuthService);
  private toast     = inject(ToastService);
  private dialogRef = inject(MatDialogRef<AuthDialogComponent>);

  activeTab: 'login' | 'register' = 'login';
  loadingLogin    = false;
  loadingRegister = false;
  showLoginPwd    = false;
  showRegPwd      = false;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  registerForm = this.fb.group({
    username: ['', Validators.required],
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  switchTab(tab: 'login' | 'register'): void {
    this.activeTab    = tab;
    this.showLoginPwd = false;
    this.showRegPwd   = false;
  }

  doLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.toast.error('Please fill all fields');
      return;
    }
    this.loadingLogin = true;
    const { username, password } = this.loginForm.value;
    this.auth.login({ Username: username!, Password: password! }).subscribe({
      next: (res) => {
        this.loadingLogin = false;
        this.toast.success(`Welcome back, ${res.Username}!`);
        this.dialogRef.close(true);
      },
      error: (err: Error) => {
        this.loadingLogin = false;
        this.toast.error(err.message);
      }
    });
  }

  doRegister(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      this.toast.error('Please fill all fields correctly');
      return;
    }
    this.loadingRegister = true;
    const { username, email, password } = this.registerForm.value;
    this.auth.register({ Username: username!, Email: email!, Password: password! }).subscribe({
      next: (res) => {
        this.loadingRegister = false;
        this.toast.success(`Account created! Welcome, ${res.Username}!`);
        this.dialogRef.close(true);
      },
      error: (err: Error) => {
        this.loadingRegister = false;
        this.toast.error(err.message);
      }
    });
  }
}