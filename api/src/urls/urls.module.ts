import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Url, UrlSchema } from "./schemas/urls.schema";
import { UrlsController } from './urls.controller';
import { UrlsService } from './urls.service';
import { UrlsRepository } from './urls.repository';
import { RedirectController } from './redirect.controller';


@Module({
  imports: [MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }])],
  controllers: [UrlsController, RedirectController],
  providers: [UrlsService, UrlsRepository]
})
export class UrlsModule { }