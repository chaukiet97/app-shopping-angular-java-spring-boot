import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsPagesComponent } from './ins-pages.component';

describe('InsPagesComponent', () => {
  let component: InsPagesComponent;
  let fixture: ComponentFixture<InsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
