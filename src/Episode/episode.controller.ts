import { Controller, Get, Query, Param } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { Observable } from 'rxjs';

@Controller('episode')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

  @Get()
  async getEpisodes(
    @Query('name') name = '',
    @Query('episode') episode = ''
  ) {
    return this.episodeService.getEpisodes(name, episode);
  }

  @Get('/:id')
  async getEpisodeById(@Param('id') id: number) {
    return this.episodeService.getEpisodeById(id);
  }
}
