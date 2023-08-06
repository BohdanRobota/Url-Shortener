import { Injectable, NotFoundException } from "@nestjs/common";
import { Url } from "./schemas/urls.schema";
import { UrlsRepository } from "./urls.repository";
import { createShortUrl } from "./utils/createShortUrl";
import { validateUrl } from "./utils/validateUrl";


@Injectable()
export class UrlsService {
  constructor(private readonly urlsRepository: UrlsRepository) { }

  async getUrls(): Promise<Url[]> {
    return this.urlsRepository.find({});
  }

  async deleteUrl(urlCode: string): Promise<boolean> {
    const deleteResult = await this.urlsRepository.deleteOne({ urlCode });
    if (!deleteResult) throw new NotFoundException(`Link with urlCode: "${urlCode}" not found`);
    return deleteResult;
  }

  async createUrl(longUrl: string) {
    validateUrl(longUrl);
    let url = await this.urlsRepository.findOne({ longUrl });
    if (url) return url;
    const shortUrl = createShortUrl();
    url = await this.urlsRepository.create({
      longUrl,
      ...shortUrl,
    });
    return url;
  }

  async getUrlByShortName(urlCode: string) {
    try {
      const url = await this.urlsRepository.findOne({ urlCode });
      if (url) {
        url.clickCount++;
        url.save();
        return url;
      };
    } catch (error) {
      throw new NotFoundException('Resource Not Found');
    }
  }
}