import { Component, OnInit } from '@angular/core';
import { NPmailService } from '../../services/npmail.service';
import { Router } from '@angular/router'
import * as $ from 'jquery'

@Component({
  selector: 'app-np-verify-page',
  templateUrl: './np-verify-page.component.html',
  styleUrls: ['./np-verify-page.component.scss']
})
export class NpVerifyPageComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  filled: boolean;

 constructor(private _mailSvc: NPmailService, private router: Router) { }

  ngOnInit() {
  }

  verifyClick() {
    if (this.filled){
    this._mailSvc.requestVerification(
	this.firstName,
	this.lastName, 
	this.email,
	this.phone
    ).subscribe(
      data => console.log('Data:' + data),
      err => console.log(err)
    );
    this.router.navigate(['np-sign-up']);
   }
  }

  checkFilled() {
	if (this.email.length > 0 && this.phone.length > 0 && this.firstName.length > 0 && this.lastName.length > 0)
		this.filled = true;
	else 
		this.filled = false;
  }

}
