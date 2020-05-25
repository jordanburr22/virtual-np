import { Component, OnInit } from '@angular/core';
import { DropdownSelectComponent } from 'src/app/components/dropdown-select/dropdown-select.component';
import { AuthService } from 'src/app/security/services/auth.service';
import { MatDialog } from '@angular/material';
import { SymptomsAPIService } from '../../services/symptoms-api.service';

@Component({
  selector: 'app-user-data-edit-page',
  templateUrl: './user-data-edit-page.component.html',
  styleUrls: ['./user-data-edit-page.component.scss']
})

export class UserDataEditPageComponent implements OnInit {

  email: string;
  gender: string;
  phone: String;
  street: String;
  city: String;
  state: String;
  zip: String;
  country: String;

  constructor(private _authSvc: AuthService, public dialog: MatDialog) { }

  genders: string[] = [
    'Male', 'Female'
  ];
  
  editClick() {
    this._authSvc.edit(
      this.email,
      this.gender,
      this.phone,
      this.street,
      this.city,
      this.state,
      this.zip,
      this.country
    );
  }

  ngOnInit() {
  }

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
