import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const checkAuthStatus = (): boolean | Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.chekAuthentication().pipe(
    tap((isAuthentication) => {
      if (!isAuthentication) {
        router.navigate(['./auth/login']);
      }
    }),
    tap((isAuthentication) => console.log(isAuthentication)),
  );
};

export const authGuardActivate: CanActivateFn = (
  route,
  state,
): boolean | Observable<boolean> => {
  //console.log('canActivate ', route, state);
  return checkAuthStatus();
};

export const authGuardMatch: CanMatchFn = (
  route,
  state,
): boolean | Observable<boolean> => {
  //console.log('canMatch', route, state);
  return checkAuthStatus();
};

export const AuthGuard = {
  authGuardActivate,
  authGuardMatch,
};
