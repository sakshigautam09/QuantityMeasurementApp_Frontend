import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { throwError, catchError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth  = inject(AuthService);
  const token = auth.getToken();

  // Attach Bearer token only when available
  const cloned = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(cloned).pipe(
    catchError((err: HttpErrorResponse) => {
      // Try every possible field the backend might put the message in
      let msg = `Error ${err.status}`;
      if (err.error) {
        msg =
          err.error.Message    ||
          err.error.message    ||
          err.error.title      ||
          err.error.Title      ||
          (err.error.errors
            ? Object.values(err.error.errors).flat().join(', ')
            : null) ||
          msg;
      }
      console.error('HTTP error:', err.status, msg, err.error);
      return throwError(() => new Error(msg));
    })
  );
};
