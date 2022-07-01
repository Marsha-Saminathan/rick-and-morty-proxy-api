import { Injectable, NotFoundException, HttpService, HttpException,Inject, CACHE_MANAGER } from '@nestjs/common';
import {  Observable } from 'rxjs';
import {
  map,
  catchError,
} from 'rxjs/operators';
import {Cache} from 'cache-manager';

@Injectable()
export class LocationService {
  constructor(private readonly httpService: HttpService, @Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getLocations(name: string, type: string, dimension: string) {
    var cachedvalue = await this.cacheManager.get('Locations');
    if(cachedvalue)
   {
     return cachedvalue;
   } 

    var Locations = await this.httpService.get('https://rickandmortyapi.com/api/location',
    {
      params: {
        name: name,
        type: type,
        dimension: dimension
      }
    })
    .pipe(
      map(response => response.data),
      catchError((e) => {
      throw new HttpException(e.response.data, e.response.status);
      }),
    ).toPromise();

    await this.cacheManager.set('Locations', Locations);
    return Locations;
  }

  async getLocationById(id: number) {
    var cachedvalue = await this.cacheManager.get('LocationById');
    if(cachedvalue)
   {
     return cachedvalue;
   } 

    var LocationById = await this.httpService.get('https://rickandmortyapi.com/api/location/' + id) 
    .pipe(
        map(response => response.data),
        catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }),
    ).toPromise();

    await this.cacheManager.set('LocationById', LocationById);
    return LocationById;
  }
}
