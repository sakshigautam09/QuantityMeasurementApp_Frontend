import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { environment } from '../../../environments/environment';

declare const google: any;

@Component({
  selector: 'app-auth-dialog',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatDialogModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatProgressSpinnerModule, MatIconModule
  ],
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {
  private fb        = inject(FormBuilder);
  private auth      = inject(AuthService);
  private toast     = inject(ToastService);
  private dialogRef = inject(MatDialogRef<AuthDialogComponent>);

  activeTab: 'login' | 'register' = 'login';
  loadingLogin    = false;
  loadingRegister = false;
  showLoginPwd    = false;
  showRegPwd      = false;
  private googleInitialized = false;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  registerForm = this.fb.group({
    username: ['', Validators.required],
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  ngOnInit(): void {
    // Give Google SDK time to load before initialising
    setTimeout(() => this.initGoogle(), 600);
  }

  private initGoogle(): void {
    if (this.googleInitialized || typeof google === 'undefined') return;
    try {
      google.accounts.id.initialize({
        client_id: environment.googleClientId,
        callback:  (res: any) => this.handleGoogleCredential(res)
      });
      this.googleInitialized = true;
      this.renderGoogleButton();
    } catch (e) {
      console.error('Google init error', e);
    }
  }

  private renderGoogleButton(): void {
    const el = document.getElementById('googleSignInBtn');
    if (!el || !this.googleInitialized) return;
    try {
      google.accounts.id.renderButton(el, {
        theme:  'filled_black',
        size:   'large',
        width:  336,
        text:   'signin_with',
        shape:  'rectangular'
      });
    } catch (e) {
      console.error('Google render error', e);
    }
  }

  switchTab(tab: 'login' | 'register'): void {
    this.activeTab   = tab;
    this.showLoginPwd = false;
    this.showRegPwd   = false;
    // Re-render Google button when switching back to login
    if (tab === 'login') setTimeout(() => this.renderGoogleButton(), 150);
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

  handleGoogleCredential(response: any): void {
    const idToken = response?.credential;
    if (!idToken) { this.toast.error('Google sign-in failed'); return; }
    this.auth.googleLogin({ IdToken: idToken }).subscribe({
      next: (res) => {
        this.toast.success(`Signed in as ${res.Username}`);
        this.dialogRef.close(true);
      },
      error: (err: Error) => this.toast.error(err.message)
    });
  }
}
