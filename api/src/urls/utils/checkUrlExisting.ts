import { BadRequestException } from "@nestjs/common";
import * as dns from "dns";
import * as urlparser from "url";

export const checkUrlExisting = async (url: string) => {
  await dns.lookup(urlparser.parse(url).hostname, async (err) => {
    if (err) throw new BadRequestException('Address not found');
  })
}