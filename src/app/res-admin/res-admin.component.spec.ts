import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResAdminComponent } from './res-admin.component';

describe('ResAdminComponent', () => {
  let component: ResAdminComponent;
  let fixture: ComponentFixture<ResAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


