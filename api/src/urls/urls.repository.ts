import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Url, UrlDocument } from "./schemas/urls.schema";
import { Model } from "mongoose";
import { EntityRepository } from "src/abstract-database/entity.repository";

@Injectable()
export class UrlsRepository extends EntityRepository<UrlDocument> {
  constructor(@InjectModel(Url.name) userModel: Model<UrlDocument>) {
    super(userModel);
  }
}