import { TestBed } from '@angular/core/testing';

import { PuzzleCartService } from './puzzle-cart.service';

describe('PuzzleCartService', () => {
  let service: PuzzleCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuzzleCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
