import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUrlDto } from './dto/createUrl.dto';
import { Url } from './schemas/urls.schema';
import { UrlsService } from './urls.service';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) { }

  @Get()
  async getUrls(): Promise<Url[]> {
    return this.urlsService.getUrls();
  }

  @Post()
  async createUrl(@Body() createUrlDto: CreateUrlDto): Promise<Url> {
    return this.urlsService.createUrl(createUrlDto.longUrl);
  }

  @Delete(':urlCode')
  async deleteUrl(@Param('urlCode') urlCode: string): Promise<boolean> {
    return this.urlsService.deleteUrl(urlCode);
  }

}