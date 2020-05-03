import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
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
  question: string;

  constructor(private _authSvc: AuthService) { }

  genders: string[] = [
    'Male', 'Female'
  ];

  ages: number[] = [];

  questions: string[] = [
    'What is the make and model of your first car?',
    'What is the first name of your first roommate?',
    'In what city were you born?',
    'What is the name of your first pet?',
    'What is the name of the street you grew up on?',
    'What is the first name of your oldest sibling?',
    'What is the first name of your youngest sibling?',
    'In what city did you and your spouse meet?'
  ];
  
  addEvent(event: MatDatepickerInputEvent<Date>) {
    var date = new Date(`${event.value}`);
    this.birthdate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
  }
  registerClick() {
    console.log(this.birthdate);
    this._authSvc.register(
      this.email,
      this.password,
      this.passwordC,
      this.firstName,
      this.lastName,
      this.gender,
      this.birthdate,
      this.question
    ).subscribe(
      data => console.log('Data:' + data),
      err => console.log(err)
    );
  }
  ngOnInit() {
    this.email = this.password = this.firstName = this.lastName = this.gender = this.passwordC = this.birthdate = this.question = '';
  }

  passwordMatch() {
    this.matched =  this.password !== this.passwordC;
  }

  

}

