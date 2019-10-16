import {
  Controller,
  Get,
  Request,
  Post,
  Body,
  Delete,
  Query,
} from '@nestjs/common';
import { Photo } from 'src/models/photo.entity';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Get('/:id')
  findById(@Request() req): Promise<any> {
    let reqParams = req.params.id;
    return this.photoService.findById(reqParams);
  }

  @Post()
  insertData(@Body() req): Promise<any> {
    return this.photoService.insertData(req);
  }

  @Delete()
  deletePhotoById(@Query() req): Promise<Number> {
    return this.photoService.deletePhotoById(req);
  }
}
