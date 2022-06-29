import { Controller, Get, Query, Param } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { Observable } from 'rxjs';

@Controller('episode')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

  @Get()
  getEpisodes(
    @Query('name') name = '',
    @Query('episode') episode = ''
  ): Observable<any[]> {
    return this.episodeService.getEpisodes(name, episode);
  }

  @Get('/:id')
  getEpisodeById(@Param('id') id: number): Observable<any[]> {
    return this.episodeService.getEpisodeById(id);
  }
}
