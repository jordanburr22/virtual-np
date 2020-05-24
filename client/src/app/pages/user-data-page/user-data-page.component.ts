import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/services/auth.service'

@Component({
  selector: 'app-user-data-page',
  templateUrl: './user-data-page.component.html',
  styleUrls: ['./user-data-page.component.scss']
})
export class UserDataPageComponent implements OnInit {

  constructor(private _authSvc: AuthService) { }

  displayFirstName() {
    this._authSvc.displayFirstName();
  }

  ngOnInit() { }

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
