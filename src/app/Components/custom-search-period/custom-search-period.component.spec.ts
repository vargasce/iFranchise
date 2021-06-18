import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSearchPeriodComponent } from './custom-search-period.component';

describe('CustomSearchPeriodComponent', () => {
  let component: CustomSearchPeriodComponent;
  let fixture: ComponentFixture<CustomSearchPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSearchPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSearchPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
