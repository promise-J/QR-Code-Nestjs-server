import {Controller, Get, Put} from '@nestjs/common'
import { AppService } from './app.service';


// const API_KEY = 'YOUR_API_KEY_HERE'
//const searchUrl = 'https://www.googleapis.com/youtube/v3/search';
// const params = {
//   part: 'snippet',
//   maxResults: 10,
//   order: 'random',
//   q: 'cat',
//   key: apiKey
// };



@Controller()
export class AppController {
  @Get('/')
  root(): any {
    return { message: 'Welcome! Scan you QR Code' };
  }
  
}

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
