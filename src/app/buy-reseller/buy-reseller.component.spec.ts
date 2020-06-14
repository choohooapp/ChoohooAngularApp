import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyResellerComponent } from './buy-reseller.component';

describe('BuyResellerComponent', () => {
  let component: BuyResellerComponent;
  let fixture: ComponentFixture<BuyResellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyResellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyResellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
