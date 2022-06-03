import { IsString } from 'class-validator';

export class UserInventoryDto {
  @IsString()
  readonly owner: string;
  @IsString()
  readonly createDate: string;
  @IsString()
  readonly modifiedDate: string;
  @IsString()
  readonly stashId: string;
  @IsString()
  readonly title: string;
  @IsString()
  readonly link: string;
}
