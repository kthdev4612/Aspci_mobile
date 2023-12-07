import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BesoinsPage } from './besoins.page';

describe('BesoinsPage', () => {
  let component: BesoinsPage;
  let fixture: ComponentFixture<BesoinsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BesoinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
