import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { LocationModule } from './location/location.module';
import { EpisodeModule } from './episode/episode.module';

@Module({
  imports: [CharacterModule, LocationModule, EpisodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
