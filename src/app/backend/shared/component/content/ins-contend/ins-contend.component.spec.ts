import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsContendComponent } from './ins-contend.component';

describe('InsContendComponent', () => {
  let component: InsContendComponent;
  let fixture: ComponentFixture<InsContendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsContendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsContendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
