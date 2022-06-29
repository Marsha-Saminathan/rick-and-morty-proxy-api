import { Module } from '@nestjs/common';
import { EpisodeController } from './episode.controller';
import { EpisodeService } from './episode.service';
import { HttpModule } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [EpisodeController],
  providers: [EpisodeService ],
})
export class EpisodeModule {}
