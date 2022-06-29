import { HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class CharacterService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getcharacters(): Observable<any>;
}
