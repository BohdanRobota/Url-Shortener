import { Controller, Get, Param, Res } from '@nestjs/common';
import { Url } from './schemas/urls.schema';
import { UrlsService } from './urls.service';

@Controller()
export class RedirectController {
  constructor(private readonly urlsService: UrlsService) { }

  @Get(':shortUrl')
  async redirect(@Res() res, @Param('shortUrl') shortUrl: string): Promise<Url> {
    const url = await this.urlsService.getUrlByShortName(shortUrl);
    return res.redirect(url.longUrl);
  }
}