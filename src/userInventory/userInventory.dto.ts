import { IsString, IsBoolean } from 'class-validator';

export class UserInventoryDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly type: string;
  @IsString()
  readonly owner: string;
  @IsString()
  readonly createDate: string;
  @IsBoolean()
  readonly public: boolean;
}
