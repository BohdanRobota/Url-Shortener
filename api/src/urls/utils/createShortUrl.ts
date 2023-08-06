import { nanoid } from "nanoid";

export const createShortUrl = () => {
  const baseURL = process.env.BASE_URL + process.env.PORT;
  const urlCode = nanoid(6);
  const shortUrl = `${baseURL}/${urlCode}`;
  return { urlCode, shortUrl };
}