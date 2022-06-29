import { Controller, Get, Query, Param } from '@nestjs/common';
import { LocationService } from './location.service';
import { Observable } from 'rxjs';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  getLocations(
    @Query('name') name = '',
    @Query('type') type = '',
    @Query('dimension') dimension = ''
  ): Observable<any[]> {
    return this.locationService.getLocations(name, type, dimension);
  }

  @Get('/:id')
  getLocationById(@Param('id') id: number): Observable<any[]> {
    return this.locationService.getLocationById(id);
  }
}
