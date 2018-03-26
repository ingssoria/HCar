import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFirstitemComponent } from './dashboard-firstitem.component';

describe('DashboardFirstitemComponent', () => {
  let component: DashboardFirstitemComponent;
  let fixture: ComponentFixture<DashboardFirstitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFirstitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFirstitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
