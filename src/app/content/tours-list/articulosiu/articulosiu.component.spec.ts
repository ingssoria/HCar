import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosiuComponent } from './articulosiu.component';

describe('ArticulosiuComponent', () => {
  let component: ArticulosiuComponent;
  let fixture: ComponentFixture<ArticulosiuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosiuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
