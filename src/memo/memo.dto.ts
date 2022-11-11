import { IsString } from 'class-validator';

export class MemoDto {
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
