import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosatComponent } from './articulosat.component';

describe('ArticulosatComponent', () => {
  let component: ArticulosatComponent;
  let fixture: ComponentFixture<ArticulosatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
