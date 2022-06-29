import { HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class EpisodeService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getEpisodes(name: string, episode: string): Observable<any>;
    getEpisodeById(id: number): Observable<any>;
}
