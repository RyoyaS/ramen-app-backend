import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(
    @Query('lat') lat: number,
    @Query('lng') lng: number,
  ): Promise<string[]> {
    console.log(lat, lng);
    return await this.appService.getShopList(lat, lng);
  }
}
