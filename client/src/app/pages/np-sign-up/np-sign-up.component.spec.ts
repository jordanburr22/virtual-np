import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpSignUpComponent } from './np-sign-up.component';

describe('NpSignUpComponent', () => {
  let component: NpSignUpComponent;
  let fixture: ComponentFixture<NpSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
