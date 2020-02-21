import { TestBed } from '@angular/core/testing';

import { JsonPainterService } from './json-painter.service';

describe('JsonPainterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonPainterService = TestBed.get(JsonPainterService);
    expect(service).toBeTruthy();
  });
});
