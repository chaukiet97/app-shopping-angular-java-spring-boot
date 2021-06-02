import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsPersonnelComponent } from './ins-personnel.component';

describe('InsPersonnelComponent', () => {
  let component: InsPersonnelComponent;
  let fixture: ComponentFixture<InsPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
