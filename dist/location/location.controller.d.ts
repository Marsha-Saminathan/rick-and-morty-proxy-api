import { LocationService } from './location.service';
import { Observable } from 'rxjs';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    getLocations(name?: string, type?: string, dimension?: string): Observable<any[]>;
    getLocationById(id: number): Observable<any[]>;
}
