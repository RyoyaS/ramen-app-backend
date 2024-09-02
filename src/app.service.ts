import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class AppService {
  private readonly api_key: string;
  private readonly url: string;
  constructor(private readonly config: ConfigService) {
    this.api_key = this.config.get('API_KEY');
    this.url = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/';
  }
  async getShopList(lat: number, lng: number): Promise<string[]> {
    let shop: string[] = [];
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    await axios
      .get(`${this.url}?key=${this.api_key}&lat=${lat}&lng=${lng}&format=json`)
      .then((res) => {
        console.log(res.data.results.shop);
        shop = res.data.results.shop;
      });
    return shop;
  }
}
