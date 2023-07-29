import { IsEmail, IsNumber, IsString } from 'class-validator';

export class verfiyDTO {
  @IsString()
  @IsEmail()
  readonly userId: string;
  @IsNumber()
  readonly key: number;
}
