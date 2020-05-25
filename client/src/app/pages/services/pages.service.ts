import { Injectable } from '@angular/core';
import { UserService } from '../../security/services/user.service';
import { Page } from '../models/page'

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private authPages: Array<Page> = [
    {
      name: 'Landing Page',
      route: '/landing-page'
    },
    {
      name: 'Chat',
      route: '/user-chat'
    },
    {
      name: 'NP Landing Page',
      route: '/np-landing-page'
    },
  ];
  private authPatientPages: Array<Page> = [
    {
      name: 'Landing Page',
      route: '/landing-page'
    },
    {
      name: 'Chat',
      route: '/user-chat'
    },
  ];
  private authNPPages: Array<Page> = [
    {
      name: 'NP Landing Page',
      route: '/np-landing-page'
    },
    {
      name: 'Chat',
      route: '/user-chat'
    },    
  ];
  private noAuthPages: Array<Page> = [
      {
        name: 'Sign Up',
        route: '/sign-up'
      },
      {
        name: 'Sign in',
        route: '/sign-in'
      },
    ];
  private nullPages: Array<Page> = [];
  private isLoggedIn: boolean = false;
  private role: string = null;

  constructor(private userService: UserService) {
    this.userService.status.subscribe((status) => this.isLoggedIn = status);
    this.userService.sharedRole.subscribe((npRole) => this.role = npRole);
  }

  public getPages() {
    if (this.isLoggedIn){
	if (this.userService.getRole() == null){
		return this.nullPages;
	}else if (this.userService.getRole() == "Client"){
		return this.authPatientPages;
	}else if (this.userService.getRole() == "Admin"){
		return this.authNPPages;
	}
    } else {
	return this.noAuthPages;
    }
  }
}
