import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = false;
    this.userService.status.subscribe((status) => {isLoggedIn = status;});

    if (isLoggedIn) {
        if (this.userService.getRole() == "Client"){
		alert("You do not have an authorized NP account. Rerouting to Patient Landing");
		this.router.navigate(['landing-page']);
		return false;
	}else if (this.userService.getRole() == "Admin"){
		return true;
	}
    }

    this.router.navigate(['sign-in'])
    return false;
  }
  
}
