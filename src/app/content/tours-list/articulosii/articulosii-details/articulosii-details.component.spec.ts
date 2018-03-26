import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosiiDetailsComponent } from './articulosii-details.component';

describe('ArticulosiiDetailsComponent', () => {
  let component: ArticulosiiDetailsComponent;
  let fixture: ComponentFixture<ArticulosiiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosiiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosiiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
