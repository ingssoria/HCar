import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSeconditemComponent } from './dashboard-seconditem.component';

describe('DashboardSeconditemComponent', () => {
  let component: DashboardSeconditemComponent;
  let fixture: ComponentFixture<DashboardSeconditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSeconditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSeconditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
