import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageListingsComponent } from './package-listings.component';

describe('PackageListingsComponent', () => {
  let component: PackageListingsComponent;
  let fixture: ComponentFixture<PackageListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
