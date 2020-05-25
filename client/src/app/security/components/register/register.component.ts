import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { TermsComponent} from'../../../components/terms/terms.component'
import { MatDialog } from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { NPmailService } from '../../../services/npmail.service';
import * as $ from 'jquery'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  passwordC: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  birthdate: string;
  matched: boolean;
  checked: boolean;
  phone: String;
  street: String;
  city: String;
  state: String;
  zip: String;
  country: String;

  constructor(private _authSvc: AuthService, private _mailSvc: NPmailService, public dialog: MatDialog) { }


  genders: string[] = [
    'Male', 'Female'
  ];
  ages: number[] = [];
  
  // validBirth used to check if the person's age is 18 years old or older
  validBirth() {
    if (this.birthdate == null)
      return true;
    var current = new Date();
    var date = this.birthdate.split("/");

    var age = current.getFullYear() - parseInt(date[0]);
    var m = current.getMonth() - parseInt(date[1]) + 1;
    var d = current.getDate() - parseInt(date[2]);
    if (age > 18){
      return true;
    }else if (age == 18) {
      if (m > 0) {
        return true;
      }else if (m == 0) {
        return d >= 0;
      }
    }
    return false;
  }

  // addEvent will change birthdate when we choose a date from the calendar
  addEvent(event: MatDatepickerInputEvent<Date>) {
    var date = new Date(`${event.value}`);
    this.birthdate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
  }

  registerClick() {
    $('#termsE').text(
      'You must agree to the terms and conditions'
    );
    this._authSvc.register(
      this.email,
      this.password,
      this.passwordC,
      this.firstName,
      this.lastName,
      this.gender,
      this.birthdate,
      this.checked,
      true,
      this.phone,
      this.street,
      this.city,
      this.state,
      this.zip,
      this.country
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
  }

  // isChecked used to check whether or not the checkbox is being checked
  isChecked() {
    this.checked = !this.checked;
    console.log(this.checked);
  }
  
  // openDialog will open a new dialog window contains information of terms and conditions
  openDialog(): void {
    const dialogRef = this.dialog.open(TermsComponent, {
      width: '70%',
      data: { name: "termsCondition", color: "black" }
    });
  }
  ngOnInit() {
    this.phone = this.street = this.city = this.zip = this.country = this.email = this.password = this.firstName = this.lastName = this.gender = this.passwordC = '';
    this.checked = false;
    for (var i = 18;  i < 100; i++){
      this.ages.push(i);
    }
  }
  
  // passwordMatch checkes if the password comfirmation is the same as the password 
  passwordMatch() {
    this.matched =  this.password !== this.passwordC;
  }


}

