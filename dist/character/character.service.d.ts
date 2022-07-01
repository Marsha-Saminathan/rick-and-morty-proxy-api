import { HttpService } from '@nestjs/common';
import { Cache } from 'cache-manager';
export declare class CharacterService {
    private readonly httpService;
    private cacheManager;
    constructor(httpService: HttpService, cacheManager: Cache);
    getCharacters(name: string, status: string, species: string, type: string, gender: string): Promise<any>;
    getCharacterById(id: number): Promise<any>;
}
