import { Injectable, NotFoundException, HttpService, HttpException } from '@nestjs/common';
import {  Observable } from 'rxjs';
import {
  map,
  catchError,
} from 'rxjs/operators';

@Injectable()
export class LocationService {
  constructor(private readonly httpService: HttpService) {}

  getLocations(name: string, type: string, dimension: string): Observable<any> {
    return this.httpService.get('https://rickandmortyapi.com/api/location',
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
    );
  }

  getLocationById(id: number): Observable<any> {
    return this.httpService.get('https://rickandmortyapi.com/api/location/' + id) 
    .pipe(
        map(response => response.data),
        catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }),
    );
  }
}
