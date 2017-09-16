import { TestBed, inject } from '@angular/core/testing';

import { FootballService } from './football.service';

describe('FootballService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballService]
    });
  });

  it('should be created', inject([FootballService], (service: FootballService) => {
    expect(service).toBeTruthy();
  }));
});
