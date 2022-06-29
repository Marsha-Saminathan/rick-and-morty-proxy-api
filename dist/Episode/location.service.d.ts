import { HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class LocationService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getLocations(name: string, status: string, species: string, type: string, gender: string): Observable<any>;
    getLocationById(id: number): Observable<any>;
    getLocationByFilter(name: string): Observable<any>;
}
