import { EpisodeService } from './episode.service';
export declare class EpisodeController {
    private readonly episodeService;
    constructor(episodeService: EpisodeService);
    getEpisodes(name?: string, episode?: string): Promise<any>;
    getEpisodeById(id: number): Promise<any>;
}
