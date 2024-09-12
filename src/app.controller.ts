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
    const shop = await this.appService.getShopList(lat, lng);
    console.log(shop);
    return shop;
  }
}
