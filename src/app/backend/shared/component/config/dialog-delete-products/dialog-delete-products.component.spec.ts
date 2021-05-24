import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteProductsComponent } from './dialog-delete-products.component';

describe('DialogDeleteProductsComponent', () => {
  let component: DialogDeleteProductsComponent;
  let fixture: ComponentFixture<DialogDeleteProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
