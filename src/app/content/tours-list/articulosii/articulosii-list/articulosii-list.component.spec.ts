import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosiiListComponent } from './articulosii-list.component';

describe('ArticulosiiListComponent', () => {
  let component: ArticulosiiListComponent;
  let fixture: ComponentFixture<ArticulosiiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosiiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosiiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
