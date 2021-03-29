import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsMadeInComponent } from './products-made-in.component';

describe('ProductsMadeInComponent', () => {
  let component: ProductsMadeInComponent;
  let fixture: ComponentFixture<ProductsMadeInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsMadeInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsMadeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
