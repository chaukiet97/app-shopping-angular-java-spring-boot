import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContendDetailComponent } from './contend-detail.component';

describe('ContendDetailComponent', () => {
  let component: ContendDetailComponent;
  let fixture: ComponentFixture<ContendDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContendDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContendDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
