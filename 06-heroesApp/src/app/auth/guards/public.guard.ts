import { ActivatedRouteSnapshot, Route, UrlSegment, RouterStateSnapshot, CanMatchFn, CanActivateFn, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

const checkAuthStatus = (): Observable<boolean> => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication()
  .pipe(
    tap( ( isAuthenticated ) => {

      console.log(isAuthenticated);

      if( isAuthenticated ){
        router.navigate(["./"]);
      }
    }),
    map( (isAuthenticated) => !isAuthenticated )
  );
}

export const authCanMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  return checkAuthStatus();
};

export const authCanActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return checkAuthStatus();
};
