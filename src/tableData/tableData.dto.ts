import { IsArray, IsString } from 'class-validator';

export class tableDataDto {
  @IsString()
  conference: string;
  @IsString()
  division: string;
  @IsString()
  created: string;
  @IsString()
  team: string;
  @IsString()
  news: string;
  @IsArray()
  players: string[];
  @IsString()
  coach: string;
}
