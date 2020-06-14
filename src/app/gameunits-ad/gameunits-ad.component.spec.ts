import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameunitsAdComponent } from './gameunits-ad.component';

describe('GameunitsAdComponent', () => {
  let component: GameunitsAdComponent;
  let fixture: ComponentFixture<GameunitsAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameunitsAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameunitsAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
