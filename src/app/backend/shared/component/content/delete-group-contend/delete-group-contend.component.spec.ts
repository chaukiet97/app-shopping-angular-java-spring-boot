import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGroupContendComponent } from './delete-group-contend.component';

describe('DeleteGroupContendComponent', () => {
  let component: DeleteGroupContendComponent;
  let fixture: ComponentFixture<DeleteGroupContendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGroupContendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGroupContendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
