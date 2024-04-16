import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductConfigureComponent } from './product-configure.component';

describe('ProductConfigureComponent', () => {
  let component: ProductConfigureComponent;
  let fixture: ComponentFixture<ProductConfigureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductConfigureComponent]
    });
    fixture = TestBed.createComponent(ProductConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
