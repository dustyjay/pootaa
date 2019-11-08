import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomePootaaComponent } from './become-pootaa.component';

describe('BecomePootaaComponent', () => {
  let component: BecomePootaaComponent;
  let fixture: ComponentFixture<BecomePootaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomePootaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomePootaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
