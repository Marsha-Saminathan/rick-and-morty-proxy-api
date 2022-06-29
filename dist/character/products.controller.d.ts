import { CharacterService } from './character.service';
import { Observable } from 'rxjs';
export declare class CharacterController {
    private readonly characterService;
    constructor(characterService: CharacterService);
    getcharacters(): Observable<any[]>;
}
