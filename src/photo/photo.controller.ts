import {
  Controller,
  Get,
  Request,
  Post,
  Body,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { Photo } from 'src/models/photo.entity';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) { }

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Get('/:id')
  findById(@Param("id") id): Promise<any> {
    return this.photoService.findById(id);
  }

  @Post()
  insertData(@Body() req): Promise<any> {
    return this.photoService.insertData(req);
  }

  @Delete("/:id")
  deletePhotoById(@Param("id") id): Promise<Number> {
    return this.photoService.deletePhotoById(id);
  }
}
