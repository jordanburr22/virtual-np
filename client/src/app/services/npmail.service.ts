import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NPmailService {

  private accessCode = new BehaviorSubject(' ');
  sharedCode = this.accessCode.asObservable();

  constructor(private _http: HttpClient) {
	
  }
 
  sendSignUpMessage(email: string) {
    return this._http
     .post(
	'http://localhost:3000/sendmail',
	{
	email: email, 
	subj: 'Account Creation', 
	message : 'Hello, Thank you for creating an account at virtual-np.'
	});
  }

  requestVerification(fname: string, lname: string, email: string, phone: string) {
    this.generateRandom();
    return this._http
     .post(
	'http://localhost:3000/sendmail',
	{
	email: 'virtualnptest@gmail.com', 
	subj: 'NP Account Requested', 
	message : `Hello, \n${fname} ${lname} has requested a nurse practitioner account. 
			\nPlease contact them at ${email} or ${phone} verify their identity and share the following access code.\nAccess code: ${this.accessCode.getValue()}`
	});
      
  }

  sendMessage(email: string) {
    return this._http
     .post(
	'http://localhost:3000/sendmail',
	{
	  email: email, subj: 'Test', message : 'hello!'
	});
  }

  generateRandom(){
	var n = Math.floor(Math.random() * 899999 + 100000);
	this.accessCode.next(n.toString());
  }
}
