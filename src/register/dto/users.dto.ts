import { IsEmail, IsString } from 'class-validator';

export class usersDTO {
  @IsString()
  @IsEmail()
  readonly userId: string;
  @IsString()
  readonly userPw: string;
  @IsString()
  readonly userNickname: string;
}
