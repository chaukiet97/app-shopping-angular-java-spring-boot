import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContendGroupComponent } from './contend-group.component';

describe('ContendGroupComponent', () => {
  let component: ContendGroupComponent;
  let fixture: ComponentFixture<ContendGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContendGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContendGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
