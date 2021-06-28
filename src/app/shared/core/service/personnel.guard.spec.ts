import { TestBed, async, inject } from '@angular/core/testing';

import { PersonnelGuard } from './personnel.guard';

describe('PersonnelGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonnelGuard]
    });
  });

  it('should ...', inject([PersonnelGuard], (guard: PersonnelGuard) => {
    expect(guard).toBeTruthy();
  }));
});
