import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UrlDocument = Url & Document;

@Schema()
export class Url {

  @Prop({ required: true })
  shortUrl: string

  @Prop({ required: true })
  longUrl: string

  @Prop({ required: true })
  urlCode: string

  @Prop({ required: true, default: 0 })
  clickCount: number
}

export const UrlSchema = SchemaFactory.createForClass(Url)