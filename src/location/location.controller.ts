import { Controller, Get, Query, Param } from '@nestjs/common';
import { LocationService } from './location.service';
import { Observable } from 'rxjs';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  async getLocations(
    @Query('name') name = '',
    @Query('type') type = '',
    @Query('dimension') dimension = ''
  ) {
    return this.locationService.getLocations(name, type, dimension);
  }

  @Get('/:id')
  async getLocationById(@Param('id') id: number) {
    return this.locationService.getLocationById(id);
  }
}
