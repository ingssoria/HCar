import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhospedajeComponent } from './adminhospedaje.component';

describe('AdminhospedajeComponent', () => {
  let component: AdminhospedajeComponent;
  let fixture: ComponentFixture<AdminhospedajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminhospedajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminhospedajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
