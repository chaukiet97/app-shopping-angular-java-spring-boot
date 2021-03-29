import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsBrandProductComponent } from './ins-brand-product.component';

describe('InsBrandProductComponent', () => {
  let component: InsBrandProductComponent;
  let fixture: ComponentFixture<InsBrandProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsBrandProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsBrandProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
