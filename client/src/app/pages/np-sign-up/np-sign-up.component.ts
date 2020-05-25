import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../security/services/auth.service';
import { TermsComponent} from '../../components/terms/terms.component';
import { MatDialog } from '@angular/material';
import { NPmailService } from '../../services/npmail.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-np-sign-up',
  templateUrl: './np-sign-up.component.html',
  styleUrls: ['./np-sign-up.component.scss']
})

export class NpSignUpComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  genCode: string
  enteredCode: string;
  password: string;
  passwordC: string;
  gender: string;
  age: number;
  birthdate: string;
  matched: boolean;

  constructor(private _authSvc: AuthService, private _mailSvc: NPmailService, public dialog: MatDialog) { }

  genders: string[] = ['Male', 'Female'];

  openDialog(): void {
    const dialogRef = this.dialog.open(TermsComponent, {
      width: '70%',
      data: { name: "termsCondition", color: "black" }
    });
  }

  ngOnInit() {
    this.email = this.password = this.firstName = this.lastName = this.gender = this.passwordC = this.enteredCode = '';
    this._mailSvc.sharedCode.subscribe(accessCode => this.genCode = accessCode);
  }

  passwordMatch() {
    this.matched =  this.password !== this.passwordC;
  }

  registerClick() {

   if (this.genCode == this.enteredCode) {
      this._authSvc.register(
        this.email,
        this.password,
        this.passwordC,
        this.firstName,
        this.lastName,
        this.gender,
        this.birthdate,
        true,
        false
      ).subscribe(
        data => console.log('Data:' + data),
        err => console.log(err)
      );

      this._mailSvc.sendSignUpMessage(
  	this.email
      ).subscribe(
        data => console.log('Data:' + data),
        err => console.log(err)
      );

    } else {
	alert("Invalid Access Code!");
    }

  }


  
}
