import { LocationService } from './location.service';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    getLocations(name?: string, type?: string, dimension?: string): Promise<any>;
    getLocationById(id: number): Promise<any>;
}
