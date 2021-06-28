import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class PersonnelGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.userService.checkFe2User())
      {
        this.router.navigate(['acount/login']);
        return;
      }
  }
}
