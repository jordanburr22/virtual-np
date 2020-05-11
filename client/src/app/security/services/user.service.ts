import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  status: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  npRole = new BehaviorSubject(' ');
  sharedRole = this.npRole.asObservable();

  constructor() {
    this.status.next(this.getUser() != null);
    this.npRole.next(this.getRole());

  }

  // Add or remove user to/from local memory
  setUser(user: any) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user.user));
      localStorage.setItem('token', JSON.stringify(user.token));
      this.status.next(true);
      this.npRole.next(user.user.role);

    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.status.next(false);
      this.npRole.next(null);

    }
  };

  // Get user from local memory
  getUser = () => JSON.parse(localStorage.getItem('user'));

  // Get token from local memory
  getToken = () => JSON.parse(localStorage.getItem('token'));

  // Remove user from local memory
  removeUser = () => this.setUser(null);

  getRole() {
	const obj = this.getUser();
	if (obj != null){
		return obj.role;
	} else
		return null;
  }

}
