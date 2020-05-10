import { Component, OnInit } from '@angular/core';
import { NPmailService } from '../../services/npmail.service';
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

 constructor(private _mailSvc: NPmailService) { }

  ngOnInit() {
    this.email = this.phone = this.firstName = this.lastName = '';
  }

  verifyClick() {
    this._mailSvc.requestVerification(
	this.firstName,
	this.lastName, 
	this.email,
	this.phone
    ).subscribe(
      data => console.log('Data:' + data),
      err => console.log(err)
    );
  }

}
