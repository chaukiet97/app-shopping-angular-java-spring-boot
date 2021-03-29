import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsMadeInComponent } from './ins-made-in.component';

describe('InsMadeInComponent', () => {
  let component: InsMadeInComponent;
  let fixture: ComponentFixture<InsMadeInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsMadeInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsMadeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
