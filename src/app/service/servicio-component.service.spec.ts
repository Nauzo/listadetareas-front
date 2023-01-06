import { TestBed } from '@angular/core/testing';

import { ServicioComponentService } from './servicio-component.service';

describe('ServicioComponentService', () => {
  let service: ServicioComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
