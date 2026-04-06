import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  AuthResponse, AuthUser,
  LoginRequest, RegisterRequest, GoogleLoginRequest
} from '../models/models';

const STORAGE_KEY = 'qm_auth';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _user   = signal<AuthUser | null>(null);
  private _token  = signal<string | null>(null);
  private _refresh = signal<string | null>(null);

  // Public read-only signals
  readonly user    = this._user.asReadonly();
  readonly token   = this._token.asReadonly();
  readonly isLoggedIn = computed(() => !!this._user());

  constructor(private http: HttpClient) {
    this.loadFromStorage();
  }

  // ─── Load saved session ───
  private loadFromStorage(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const d = JSON.parse(raw);
      this._user.set(d.user);
      this._token.set(d.token);
      this._refresh.set(d.refreshToken);
    } catch { }
  }

  private saveToStorage(user: AuthUser, token: string, refreshToken: string): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, token, refreshToken }));
  }

  private applyAuth(res: AuthResponse): void {
    const user: AuthUser = {
      username: res.Username,
      email: res.Email,
      role: res.Role
    };
    this._user.set(user);
    this._token.set(res.AccessToken);
    this._refresh.set(res.RefreshToken);
    this.saveToStorage(user, res.AccessToken, res.RefreshToken);
  }

  // ─── Login ───
  login(payload: LoginRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${environment.apiBase}/users/login`, payload)
      .pipe(tap(res => this.applyAuth(res)));
  }

  // ─── Register ───
  register(payload: RegisterRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${environment.apiBase}/users/register`, payload)
      .pipe(tap(res => this.applyAuth(res)));
  }

  // ─── Google Login ───
  googleLogin(payload: GoogleLoginRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${environment.apiBase}/users/google-login`, payload)
      .pipe(tap(res => this.applyAuth(res)));
  }

  // ─── Logout ───
  logout(): void {
    this._user.set(null);
    this._token.set(null);
    this._refresh.set(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  getToken(): string | null {
    return this._token();
  }
}
