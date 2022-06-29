import { CharacterService } from './character.service';
import { Observable } from 'rxjs';
export declare class CharacterController {
    private readonly characterService;
    constructor(characterService: CharacterService);
    getCharacters(name?: string, status?: string, species?: string, type?: string, gender?: string): Observable<any[]>;
    getCharacterById(id: number): Observable<any[]>;
}
