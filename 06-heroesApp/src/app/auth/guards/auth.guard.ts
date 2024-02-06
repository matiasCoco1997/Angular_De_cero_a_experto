import { ActivatedRouteSnapshot, Route, UrlSegment, RouterStateSnapshot, CanMatchFn, CanActivateFn, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';


const checkAuthStatus = (): Observable<boolean> => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication().pipe(
    tap( ( isAuthenticated:boolean ) => {
      if( !isAuthenticated ){
        router.navigateByUrl("/auth/login");
      }
    })
  );
}

export const canMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  // console.log('CanMatch');
  // console.log({ route, segments });

  return checkAuthStatus();
};

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  // console.log('CanActivate');
  // console.log({ route, state });
  return checkAuthStatus();
};
