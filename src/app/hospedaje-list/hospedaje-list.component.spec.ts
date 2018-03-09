import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedajeListComponent } from './hospedaje-list.component';

describe('HospedajeListComponent', () => {
  let component: HospedajeListComponent;
  let fixture: ComponentFixture<HospedajeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospedajeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospedajeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
