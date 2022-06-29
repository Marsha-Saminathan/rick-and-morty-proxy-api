import { HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class LocationService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getLocations(name: string, type: string, dimension: string): Observable<any>;
    getLocationById(id: number): Observable<any>;
}
