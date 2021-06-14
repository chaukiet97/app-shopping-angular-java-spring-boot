import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsBannerComponent } from './ins-banner.component';

describe('InsBannerComponent', () => {
  let component: InsBannerComponent;
  let fixture: ComponentFixture<InsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
