import { Module, CacheModule } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { EpisodeController } from './episode.controller';
import { EpisodeService } from './episode.service';
import { HttpModule } from '@nestjs/common';

@Module({
  imports: [HttpModule, CacheModule.register({
    store:redisStore,
    host: 'localhost',
    port: 6379,
    ttl:300
  })],
  controllers: [EpisodeController],
  providers: [EpisodeService ],
})
export class EpisodeModule {}
