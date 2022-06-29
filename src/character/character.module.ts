import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';
import { HttpModule } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [CharacterController],
  providers: [CharacterService ],
})
export class CharacterModule {}
