import { LocationService } from './location.service';
import { Observable } from 'rxjs';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    getLocations(name?: string, status?: string, species?: string, type?: string, gender?: string): Observable<any[]>;
    getLocationById(id: number): Observable<any[]>;
}
