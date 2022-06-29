import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { HttpModule } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [LocationController],
  providers: [LocationService ],
})
export class LocationModule {}
