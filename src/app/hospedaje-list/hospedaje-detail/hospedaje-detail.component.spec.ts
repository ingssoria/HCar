import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedajeDetailComponent } from './hospedaje-detail.component';

describe('HospedajeDetailComponent', () => {
  let component: HospedajeDetailComponent;
  let fixture: ComponentFixture<HospedajeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospedajeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospedajeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
