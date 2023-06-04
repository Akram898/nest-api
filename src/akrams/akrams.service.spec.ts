import { Test, TestingModule } from '@nestjs/testing';
import { AkramsService } from './akrams.service';

describe('AkramsService', () => {
  let service: AkramsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AkramsService],
    }).compile();

    service = module.get<AkramsService>(AkramsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
