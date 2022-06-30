import { Module, CacheModule } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { LocationModule } from './location/location.module';
import { EpisodeModule } from './episode/episode.module';

@Module({
  imports: [CharacterModule, LocationModule, EpisodeModule, CacheModule.register({
    store:redisStore,
    host: 'localhost',
    port: 6379,
    ttl:300
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
