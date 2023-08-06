import axios from 'axios';
import { UrlsEnum } from '../enums';

export default class UrlsService {
  static async getAll() {
    return await axios.get(UrlsEnum.API_URL);
  }

  static async delete(urlCode: string) {
    return await axios.delete(UrlsEnum.API_URL + urlCode);
  }

  static async addUrl(longUrl: string) {
    return await axios.post(UrlsEnum.API_URL, {
      longUrl
    });
  }

  static async redirect(urlCode: string) {
    await axios.post(UrlsEnum.API_REDIRECT_URL + urlCode);
  }
}
