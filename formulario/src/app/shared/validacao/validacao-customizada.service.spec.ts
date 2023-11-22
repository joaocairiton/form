import { TestBed } from '@angular/core/testing';

import { ValidacaoCustomizadaService } from './validacao-customizada.service';

describe('ValidacaoCustomizadaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidacaoCustomizadaService = TestBed.get(ValidacaoCustomizadaService);
    expect(service).toBeTruthy();
  });
});
