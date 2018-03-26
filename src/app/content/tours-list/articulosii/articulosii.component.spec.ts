import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosiiComponent } from './articulosii.component';

describe('ArticulosiiComponent', () => {
  let component: ArticulosiiComponent;
  let fixture: ComponentFixture<ArticulosiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
