import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireSuccessComponent } from './hire-success.component';

describe('HireSuccessComponent', () => {
  let component: HireSuccessComponent;
  let fixture: ComponentFixture<HireSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
