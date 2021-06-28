import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsGroupComponent } from './ins-group.component';

describe('InsGroupComponent', () => {
  let component: InsGroupComponent;
  let fixture: ComponentFixture<InsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
