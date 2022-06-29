import { Controller, Get, Query, Param } from '@nestjs/common';
import { CharacterService } from './character.service';
import { Observable } from 'rxjs';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  getCharacters(
    @Query('name') name = '',
    @Query('status') status = '',
    @Query('species') species = '',
    @Query('type') type = '',
    @Query('gender') gender = ''
  ): Observable<any[]> {
    return this.characterService.getCharacters(name, status, species, type, gender);
  }

  @Get('/:id')
  getCharacterById(@Param('id') id: number): Observable<any[]> {
    return this.characterService.getCharacterById(id);
  }
}
