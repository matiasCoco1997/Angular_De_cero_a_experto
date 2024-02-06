import { ActivatedRouteSnapshot, Route, UrlSegment, RouterStateSnapshot, CanMatchFn, CanActivateFn} from '@angular/router';

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('CanActivate');
  console.log({ route, state });

  return true;
};

export const canMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  console.log('CanMatch');
  console.log({ route, segments });

  return true;
};
