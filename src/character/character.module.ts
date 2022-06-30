import { Module, CacheModule } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';

import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';
import { HttpModule } from '@nestjs/common';

@Module({
  imports: [HttpModule, CacheModule.register({
    store:redisStore,
    host: 'localhost',
    port: 6379,
    ttl:300
  })],
  controllers: [CharacterController],
  providers: [CharacterService ],
})
export class CharacterModule {}
