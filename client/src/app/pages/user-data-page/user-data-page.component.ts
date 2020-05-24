import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/security/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data-page',
  templateUrl: './user-data-page.component.html',
  styleUrls: ['./user-data-page.component.scss']
})
export class UserDataPageComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  getFirstName() {
    return this.userService.getUser().firstName;
  }

  getLastName() {
    return this.userService.getUser().lastName;
  }

  getDOB() {
    return this.userService.getUser();
  }

  getGenderID() {
    return this.userService.getUser().gender;
  }

  getAddress() {
    return this.userService.getUser().address;
  }

  getCity() {
    return this.userService.getUser().city;
  }

  getZip() {
    return this.userService.getUser().zip;
  }

  getCountry() {
    return this.userService.getUser().country;
  }

  getState() {
    return this.userService.getUser().state;
  }

  getEmail() {
    return this.userService.getUser().email;
  }

  getPhone() {
    return this.userService.getUser().phone;
  }

  ngOnInit() { }

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
