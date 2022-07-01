import { HttpService } from '@nestjs/common';
import { Cache } from 'cache-manager';
export declare class EpisodeService {
    private readonly httpService;
    private cacheManager;
    constructor(httpService: HttpService, cacheManager: Cache);
    getEpisodes(name: string, episode: string): Promise<any>;
    getEpisodeById(id: number): Promise<any>;
}
