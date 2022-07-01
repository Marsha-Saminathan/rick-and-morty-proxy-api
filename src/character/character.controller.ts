import { Controller, Get, Query, Param } from '@nestjs/common';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  async getCharacters(
    @Query('name') name = '',
    @Query('status') status = '',
    @Query('species') species = '',
    @Query('type') type = '',
    @Query('gender') gender = ''
  ) {
   return this.characterService.getCharacters(name, status, species, type, gender);
  }

  @Get('/:id')
  async getCharacterById(@Param('id') id: number) {
    return this.characterService.getCharacterById(id);
  }
}
