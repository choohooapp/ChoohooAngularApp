import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgtComponent } from './fgt.component';

describe('FgtComponent', () => {
  let component: FgtComponent;
  let fixture: ComponentFixture<FgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
