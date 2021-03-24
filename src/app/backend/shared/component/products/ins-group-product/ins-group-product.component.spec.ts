import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsGroupProductComponent } from './ins-group-product.component';

describe('InsGroupProductComponent', () => {
  let component: InsGroupProductComponent;
  let fixture: ComponentFixture<InsGroupProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsGroupProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsGroupProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
