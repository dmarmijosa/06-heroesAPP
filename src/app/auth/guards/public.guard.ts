import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, map, tap } from 'rxjs';

export const checkAuth = (): boolean | Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.chekAuthentication().pipe(
    tap((isAuthentication) => {
      if (isAuthentication) {
        router.navigate(['./']);
      }
    }),
    map((isAuthentication) => !isAuthentication),
  );
};

export const publicGuardActivate: CanActivateFn = (route, state) => {
  return checkAuth();
};

export const publicGuardMath: CanMatchFn = (route, state) => {
  return checkAuth();
};

export const publicGuard = {
  publicGuardActivate,
  publicGuardMath,
};
