import { EpisodeService } from './episode.service';
import { Observable } from 'rxjs';
export declare class EpisodeController {
    private readonly episodeService;
    constructor(episodeService: EpisodeService);
    getEpisodes(name?: string, episode?: string): Observable<any[]>;
    getEpisodeById(id: number): Observable<any[]>;
}
