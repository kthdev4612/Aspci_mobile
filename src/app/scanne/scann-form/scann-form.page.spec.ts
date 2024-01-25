import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScannFormPage } from './scann-form.page';

describe('ScannFormPage', () => {
  let component: ScannFormPage;
  let fixture: ComponentFixture<ScannFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScannFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
