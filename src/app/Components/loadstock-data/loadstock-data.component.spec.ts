import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadstockDataComponent } from './loadstock-data.component';

describe('LoadstockDataComponent', () => {
  let component: LoadstockDataComponent;
  let fixture: ComponentFixture<LoadstockDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadstockDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadstockDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
