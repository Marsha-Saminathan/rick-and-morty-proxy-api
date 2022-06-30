import { Module, CacheModule } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { HttpModule } from '@nestjs/common';

@Module({
  imports: [HttpModule, CacheModule.register({
    store:redisStore,
    host: 'localhost',
    port: 6379,
    ttl:300
  })],
  controllers: [LocationController],
  providers: [LocationService ],
})
export class LocationModule {}
