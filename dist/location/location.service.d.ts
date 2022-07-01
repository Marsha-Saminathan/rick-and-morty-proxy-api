import { HttpService } from '@nestjs/common';
import { Cache } from 'cache-manager';
export declare class LocationService {
    private readonly httpService;
    private cacheManager;
    constructor(httpService: HttpService, cacheManager: Cache);
    getLocations(name: string, type: string, dimension: string): Promise<any>;
    getLocationById(id: number): Promise<any>;
}
