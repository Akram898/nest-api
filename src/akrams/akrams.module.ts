import { Module } from '@nestjs/common';
import { AkramsController } from './akrams.controller';
import { AkramsService } from './akrams.service';

@Module({
  controllers: [AkramsController],
  providers: [AkramsService]
})
export class AkramsModule {}
