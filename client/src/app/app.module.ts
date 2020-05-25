import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SecurityModule } from './security/security.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import {
  HomePageComponent,
  SignInPageComponent,
  SignUpPageComponent,
  LandingPageComponent,
  UserChatPageComponent,
  AdminChatPageComponent,
  VisitPageComponent,
  CalendarPageComponent,
  UserDataPageComponent,
  UserDataEditPageComponent,

} from './pages';


import { HeaderComponent } from './components/navigation/header/header.component'
import { DropdownSelectComponent } from './components/dropdown-select/dropdown-select.component';
import { NpLandingPageComponent } from './pages/np-landing-page/np-landing-page.component';
import { NpVisitPageComponent } from './pages/np-visit-page/np-visit-page.component';
import { PaypalPageComponent } from './pages/paypal-page/paypal-page.component';
import { TermsComponent} from './components/terms/terms.component'
import { MatDialogModule } from '@angular/material';
import { NPmailService } from './services/npmail.service';
import { PatientSignUpComponent } from './pages/patient-sign-up/patient-sign-up.component';
import { NpSignUpComponent } from './pages/np-sign-up/np-sign-up.component';
import { NpVerifyPageComponent } from './pages/np-verify-page/np-verify-page.component'; 
import { ScheduleVisitComponent } from './pages/schedule-visit-page/schedule-visit.component';
import { PreviewVisitComponent } from './pages/preview-visit-page/preview-visit.component';
import { NpPatientsPageComponent } from './pages/np-patients-page/np-patients-page.component';
import { NpCalendarPageComponent } from './pages/np-calendar-page/np-calendar-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpPageComponent,
    SignInPageComponent,
    LandingPageComponent,
    UserChatPageComponent,
    AdminChatPageComponent,
    HeaderComponent,
    VisitPageComponent,
    DropdownSelectComponent,
    CalendarPageComponent,
    UserDataPageComponent,
    UserDataEditPageComponent,
    NpLandingPageComponent,
    NpVisitPageComponent,
    NpPatientsPageComponent,
    NpCalendarPageComponent,
    PaypalPageComponent,
    TermsComponent,
    PatientSignUpComponent,
    NpSignUpComponent,
    NpVerifyPageComponent,
    ScheduleVisitComponent,
    PreviewVisitComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SecurityModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center'
    })
  ],
  providers: [
    { provide: DropdownSelectComponent, useClass: DropdownSelectComponent }
  ],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [TermsComponent]
})
export class AppModule { }
