import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellDataComponent } from './sell-data.component';

describe('SellDataComponent', () => {
  let component: SellDataComponent;
  let fixture: ComponentFixture<SellDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
