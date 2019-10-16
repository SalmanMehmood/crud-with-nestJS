import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Photo } from 'src/models/photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async findById(id): Promise<Photo> {
    let response = await this.photoRepository.findOne({ id });
    if (!response) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'No data found',
        },
        403,
      );
    }
    return response;
  }

  async insertData(bodyData): Promise<any> {
    await this.photoRepository.insert(bodyData);
    throw new HttpException({ status: HttpStatus.OK, message: 'success' }, 200);
  }

  async deletePhotoById(id): Promise<any> {
    let check = await this.photoRepository.remove(id);
    if (!check) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'No data found',
        },
        403,
      );
    }
    throw new HttpException({ status: HttpStatus.OK, message: 'success' }, 200);
  }
}
