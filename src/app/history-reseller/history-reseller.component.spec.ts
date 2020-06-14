import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryResellerComponent } from './history-reseller.component';

describe('HistoryResellerComponent', () => {
  let component: HistoryResellerComponent;
  let fixture: ComponentFixture<HistoryResellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryResellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryResellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
