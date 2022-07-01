import { Injectable, NotFoundException, HttpService, HttpException,Inject, CACHE_MANAGER } from '@nestjs/common';
import {  Observable } from 'rxjs';
import {
  map,
  catchError,
} from 'rxjs/operators';
import {Cache} from 'cache-manager';

@Injectable()
export class CharacterService {
  constructor(private readonly httpService: HttpService, @Inject(CACHE_MANAGER) private cacheManager: Cache) {}

   async getCharacters(name: string, status: string, species: string, type: string, gender: string) {
    var cachedvalue = await this.cacheManager.get('Characters');
     if(cachedvalue)
    {
      return cachedvalue;
    } 

    var characters = await this.httpService.get('https://rickandmortyapi.com/api/character',
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
    ).toPromise();

    await this.cacheManager.set('Characters', characters);
    return characters;
  }

  async getCharacterById(id: number) {
    var cachedvalue = await this.cacheManager.get('CharacterById');
    if(cachedvalue)
   {
     return cachedvalue;
   } 

    var CharacterById = await this.httpService.get('https://rickandmortyapi.com/api/character/' + id) 
    .pipe(
      map(response => response.data),
      catchError((e) => {
      throw new HttpException(e.response.data, e.response.status);
      }),
    ).toPromise();

    await this.cacheManager.set('CharacterById', CharacterById);
    return CharacterById;
  }
}
