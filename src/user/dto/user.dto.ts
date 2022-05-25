import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UserDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly password: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly avatarUrl: string;
  @IsString()
  readonly createDate: string;
}
