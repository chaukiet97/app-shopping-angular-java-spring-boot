import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContendComponent } from './contend.component';

describe('ContendComponent', () => {
  let component: ContendComponent;
  let fixture: ComponentFixture<ContendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
