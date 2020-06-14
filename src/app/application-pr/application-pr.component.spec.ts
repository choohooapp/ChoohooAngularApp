import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationPrComponent } from './application-pr.component';

describe('ApplicationPrComponent', () => {
  let component: ApplicationPrComponent;
  let fixture: ComponentFixture<ApplicationPrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationPrComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
