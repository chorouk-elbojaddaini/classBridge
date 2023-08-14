import { TestBed } from '@angular/core/testing';

import { SelectedItemServiceService } from './selected-item-service.service';

describe('SelectedItemServiceService', () => {
  let service: SelectedItemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedItemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
