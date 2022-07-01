import { CharacterService } from './character.service';
export declare class CharacterController {
    private readonly characterService;
    constructor(characterService: CharacterService);
    getCharacters(name?: string, status?: string, species?: string, type?: string, gender?: string): Promise<any>;
    getCharacterById(id: number): Promise<any>;
}
