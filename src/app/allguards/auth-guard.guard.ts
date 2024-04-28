import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CommonService } from '../service/common.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const _common: CommonService = inject(CommonService);

  const protectedRoutes: string[] = ['/admindashboard', '/admindashboard/productconfig', '/admindashboard/enquirylist'];
  const isLogIn = _common.getToken();
  return protectedRoutes.includes(state.url) && (isLogIn == null || isLogIn == undefined || isLogIn == "") ? router.navigate(['home']) : true;
};
