import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeShippingComponent } from './type-shipping.component';

describe('TypeShippingComponent', () => {
  let component: TypeShippingComponent;
  let fixture: ComponentFixture<TypeShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
