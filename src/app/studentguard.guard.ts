import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const studentguardGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router);
  let login=localStorage.getItem('loggedIn');
  if(login==='false'){
    alert('Not Authorized for Student Childrens...!');
    _router.navigate(['/login']);
    return false;
  }
  return true;
};
