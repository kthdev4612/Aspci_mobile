import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScannePage } from './scanne.page';

describe('ScannePage', () => {
  let component: ScannePage;
  let fixture: ComponentFixture<ScannePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScannePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
