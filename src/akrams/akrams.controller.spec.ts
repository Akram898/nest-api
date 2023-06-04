import { Test, TestingModule } from '@nestjs/testing';
import { AkramsController } from './akrams.controller';

describe('AkramsController', () => {
  let controller: AkramsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AkramsController],
    }).compile();

    controller = module.get<AkramsController>(AkramsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
