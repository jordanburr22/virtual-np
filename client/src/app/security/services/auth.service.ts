import { Injectable  } from "@angular/core";
import { UserService } from "./user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from '@angular/router'

@Injectable({
  providedIn: "root"
})
export class AuthService {

  private headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private router: Router,
    private _http: HttpClient,
    private _userSvc: UserService
  ) {}

  public test() {
    return this._http
    .get<any>(
      "http://localhost:3000/api/stuff/info",
      { headers: this.headers }
    ).toPromise()
    .then(response => {
      let data = response;
      console.log(data);
      return data;
    });
  }

  public np_login(email: string, password: string) {
    return this._http
    .post(
      "http://localhost:3000/api/auth/login",
      { email: email, password: password },
      { headers: this.headers }
    )
    .pipe(
      map((user: any) => {
        this._userSvc.setUser(user);
	if (this._userSvc.getRole() == "Client"){
		alert("You do not have an authorized NP account. Rerouting to Patient Landing");
		this.router.navigate(['landing-page']);

	} else if (this._userSvc.getRole() == "Admin"){
        	this.router.navigate(['np-landing-page']);
	}
        return user;
      })
    );
  }

  public login(email: string, password: string) {
    return this._http
    .post(
      "http://localhost:3000/api/auth/login",
      { email: email, password: password },
      { headers: this.headers }
    )
    .pipe(
      map((user: any) => {
        this._userSvc.setUser(user);
	if (this._userSvc.getRole() == "Client"){
		this.router.navigate(['landing-page']);
	} else if (this._userSvc.getRole() == "Admin"){
		alert("You do not have a Patient account. Rerouting to NP Landing");
        	this.router.navigate(['np-landing-page']);
	}
        return user;
      })
    );
  }

  public logout() {
    this._userSvc.removeUser();
    this.router.navigate(['sign-in']);
  }

  public register(
    email: string,
    password: string,
    passwordC: string,
    firstName: string,
    lastName: string,
    gender: String,
    birthdate: String,
    checked: boolean,
    patient: boolean,
    phone: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String
  ) {
    return this._http
    .post(
      "http://localhost:3000/api/auth/register",
      {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        passwordC: passwordC,
        gender: gender,
        birthdate: birthdate,
        checked: checked,
	      patient: patient,
        phone: phone,
        street: street,
        city: city,
        state: state,
        zip: zip,
        country: country
      },
      { headers: this.headers }
    )
    .pipe(
      map((user: any) => {
        this._userSvc.setUser(user);
        this.router.navigate(['landing-page']);
        return user;
      })
    );
  }

  public edit(
    email: String,
    gender: String,
    phone: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String
  ) {
    return this._http
    .post(
      "http://localhost:3000/api/auth/register",
      {
        email: email,
        gender: gender,
        phone: phone,
        street: street,
        city: city,
        state: state,
        zip: zip,
        country: country
      },
      { headers: this.headers }
    )
    .pipe(
      map((user: any) => {
        this._userSvc.setUser(user);
	if (patient)
        	this.router.navigate(['landing-page']);
	else 
		this.router.navigate(['np-landing-page']);
        return user;
      })
    );
  }

}
