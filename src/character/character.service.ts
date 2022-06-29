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
export class CharacterService {
  constructor(private readonly httpService: HttpService) {}

  getCharacters(name: string, status: string, species: string, type: string, gender: string): Observable<any> {
    return this.httpService.get('https://rickandmortyapi.com/api/character',
    {
      params: {
        name: name,
        status: status,
        species: species,
        type: type,
        gender: gender
      }
    })
    .pipe(
      map(response => response.data),
      catchError((e) => {
      throw new HttpException(e.response.data, e.response.status);
      }),
    );
  }

  getCharacterById(id: number): Observable<any> {
    return this.httpService.get('https://rickandmortyapi.com/api/character/' + id) 
    .pipe(
        map(response => response.data),
        catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }),
    );
  }
}
