import { Injectable } from '@nestjs/common';
import { RandomData } from 'src/models/random-data';

@Injectable()
export class RandomService {
  getRandomData(): RandomData {
    const randomData: RandomData = {
      name: 'hello world',
      image: 'Not Found!!',
      message: 'there is no message available to show...',
    };
    return randomData;
  }
}
