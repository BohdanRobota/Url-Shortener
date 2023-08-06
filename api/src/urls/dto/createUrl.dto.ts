import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUrlDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(500)
  longUrl: string
}