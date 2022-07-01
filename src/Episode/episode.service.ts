import { Injectable, NotFoundException, HttpService, HttpException, Inject, CACHE_MANAGER } from '@nestjs/common';
import {  Observable } from 'rxjs';
import {
  map,
  catchError,
} from 'rxjs/operators';
import {Cache} from 'cache-manager';

@Injectable()
export class EpisodeService {
  constructor(private readonly httpService: HttpService, @Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getEpisodes(name: string, episode: string){

    var cachedvalue = await this.cacheManager.get('Episodes');
    if(cachedvalue)
   {
     return cachedvalue;
   } 

    var Episodes = await this.httpService.get('https://rickandmortyapi.com/api/episode',
    {
      params: {
        name: name,
        episode: episode
      }
    })
    .pipe(
      map(response => response.data),
      catchError((e) => {
      throw new HttpException(e.response.data, e.response.status);
      }),
    ).toPromise();

    await this.cacheManager.set('Episodes', Episodes);
    return Episodes;
  }

  async getEpisodeById(id: number) {
    var cachedvalue = await this.cacheManager.get('EpisodeById');
    if(cachedvalue)
   {
     return cachedvalue;
   } 

    var EpisodeById = await this.httpService.get('https://rickandmortyapi.com/api/episode/' + id) 
    .pipe(
        map(response => response.data),
        catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }),
    ).toPromise();

    await this.cacheManager.set('EpisodeById', EpisodeById);
    return EpisodeById;
  }
}
