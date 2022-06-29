import { Injectable, NotFoundException, HttpService, HttpException } from '@nestjs/common';
import { of, Observable } from 'rxjs';
import {
  delay,
  filter,
  toArray,
  throwIfEmpty,
  switchMap,
  take,
  map,
  catchError,
} from 'rxjs/operators';

@Injectable()
export class EpisodeService {
  constructor(private readonly httpService: HttpService) {}

  getEpisodes(name: string, episode: string): Observable<any> {
    return this.httpService.get('https://rickandmortyapi.com/api/episode',
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
    );
  }

  getEpisodeById(id: number): Observable<any> {
    return this.httpService.get('https://rickandmortyapi.com/api/episode/' + id) 
    .pipe(
        map(response => response.data),
        catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }),
    );
  }
}
