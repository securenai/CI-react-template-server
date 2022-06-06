import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateTokenDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly accessToken: string;
  @IsString()
  readonly refreshToken: string;
}
