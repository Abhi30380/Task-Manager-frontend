import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { WindowLocalStorageService } from './service/local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const _WindowLocalStorageService = inject(WindowLocalStorageService);
  let isLoggedIn = _WindowLocalStorageService.getItem('id');
  if(!isLoggedIn){
    _router.navigateByUrl('/login');
    return false;

  }
  return true;
};
