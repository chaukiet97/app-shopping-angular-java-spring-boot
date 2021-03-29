import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBrandComponent } from './products-brand.component';

describe('ProductsBrandComponent', () => {
  let component: ProductsBrandComponent;
  let fixture: ComponentFixture<ProductsBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
