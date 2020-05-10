import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpVerifyPageComponent } from './np-verify-page.component';

describe('NpVerifyPageComponent', () => {
  let component: NpVerifyPageComponent;
  let fixture: ComponentFixture<NpVerifyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpVerifyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpVerifyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
