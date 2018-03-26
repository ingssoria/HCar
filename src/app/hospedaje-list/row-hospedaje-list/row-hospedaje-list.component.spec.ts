import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowHospedajeListComponent } from './row-hospedaje-list.component';

describe('RowHospedajeListComponent', () => {
  let component: RowHospedajeListComponent;
  let fixture: ComponentFixture<RowHospedajeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowHospedajeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowHospedajeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
