import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AkramsModule } from './akrams/akrams.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AkramsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
