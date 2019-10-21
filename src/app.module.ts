import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
// random controller and module importing...
import { RandomController } from 'src/random/random.controller';
import { RandomModule } from 'src/random/random.module';
//Photo Controler and photo module importing...
import { PhotoModule } from './photo/photo.module';
import { PhotoController } from './photo/photo.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RandomModule,
    PhotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(RandomController, PhotoController);
  }
}
