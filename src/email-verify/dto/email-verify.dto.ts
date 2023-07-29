import { IsNumber, IsString } from 'class-validator';

export class verfiyDTO {
  @IsString()
  readonly userId: string;
  @IsNumber()
  readonly key: number;
}
