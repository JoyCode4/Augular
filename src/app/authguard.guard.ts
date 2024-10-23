import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router);
  let login=localStorage.getItem('loggedIn');
  if(login==='false'){
    alert('please login first..!');
    _router.navigate(['/login']);
    return false;
  }
  return true;
};
