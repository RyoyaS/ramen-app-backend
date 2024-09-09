import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class AppService {
  private api_key: string;
  private url: string;
  constructor(private config: ConfigService) {
    this.api_key = this.config.get('HOTPEPPER_API_KEY');
    console.log(this.api_key);
    this.url = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/';
  }
  async getShopList(lat: number, lng: number): Promise<string[]> {
    console.log('start');
    let shop: string[] = [];
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    await axios
      .get(
        // `${this.url}?key=${this.api_key}&lat=${lat}&lng=${lng}&format=json&genre=G013&count=30`,
        `${this.url}?key=${this.api_key}&lat=${35.6905}&lng=${139.6995}&format=json&genre=G013&count=30`,
      )
      .then((res) => {
        shop = res.data.results.shop;
      });
    return shop;
    // return [JSON.parse(this.config.get('JSON_DATE'))];
  }
}
