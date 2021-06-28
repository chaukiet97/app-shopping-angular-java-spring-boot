import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContendComponent } from './delete-contend.component';

describe('DeleteContendComponent', () => {
  let component: DeleteContendComponent;
  let fixture: ComponentFixture<DeleteContendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteContendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteContendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
