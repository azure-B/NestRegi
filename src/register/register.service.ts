import { Injectable } from '@nestjs/common';
import { registerDBService } from 'src/dbcontroll/dbcontroll.service';
import { usersDTO } from './dto/users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegisterService {
  constructor(private readonly DB: registerDBService) {}

  async hashPW(userPW: string): Promise<string> {
    const hashed = await bcrypt.hash(userPW, 10);
    return hashed;
  }

  async addUser(userdata: usersDTO): Promise<boolean> {
    if (await this.DB.findOne(userdata)) {
      return false;
    } else {
      const hashedPW = await this.hashPW(userdata.userPw);
      const saveData = {
        userId: userdata.userId,
        userPw: hashedPW,
        userNickname: userdata.userNickname,
      };

      this.DB.create(saveData);
      return true;
    }
  }
}
