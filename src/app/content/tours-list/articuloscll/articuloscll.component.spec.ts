import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloscllComponent } from './articuloscll.component';

describe('ArticuloscllComponent', () => {
  let component: ArticuloscllComponent;
  let fixture: ComponentFixture<ArticuloscllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloscllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloscllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
