import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalePage } from './signale.page';

describe('SignalePage', () => {
  let component: SignalePage;
  let fixture: ComponentFixture<SignalePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
