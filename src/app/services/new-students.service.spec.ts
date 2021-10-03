import { TestBed } from '@angular/core/testing';

import { NewStudentsService } from './new-students.service';

describe('NewStudentsService', () => {
  let service: NewStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
