import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsGroupPagesComponent } from './ins-group-pages.component';

describe('InsGroupPagesComponent', () => {
  let component: InsGroupPagesComponent;
  let fixture: ComponentFixture<InsGroupPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsGroupPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsGroupPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
