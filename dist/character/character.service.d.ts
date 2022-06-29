import { HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class CharacterService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getCharacters(name: string, status: string, species: string, type: string, gender: string): Observable<any>;
    getCharacterById(id: number): Observable<any>;
}
