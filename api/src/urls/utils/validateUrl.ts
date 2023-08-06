import { isURL } from 'class-validator';
import { BadRequestException } from "@nestjs/common";

export const validateUrl = (url: string) => {
  if (!isURL(url)) {
    throw new BadRequestException('String Must be a Valid URL');
  }
}