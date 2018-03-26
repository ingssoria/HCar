import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosccComponent } from './articuloscc.component';

describe('ArticulosccComponent', () => {
  let component: ArticulosccComponent;
  let fixture: ComponentFixture<ArticulosccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
