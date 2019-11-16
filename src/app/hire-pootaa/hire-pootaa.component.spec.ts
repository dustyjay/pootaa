import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HirePootaaComponent } from './hire-pootaa.component';

describe('HirePootaaComponent', () => {
  let component: HirePootaaComponent;
  let fixture: ComponentFixture<HirePootaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HirePootaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HirePootaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
