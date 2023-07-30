import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { verfiyDTO } from './dto/email-verify.dto';
import { verifyDBService } from 'src/dbcontroll/dbcontroll.service';

@Injectable()
export class emailVerifyService {
  constructor(
    private readonly DB: verifyDBService,
    private readonly mailer: MailerService,
    private readonly config: ConfigService,
  ) {}

  async saveKey(data: verfiyDTO): Promise<boolean> {
    const findone = await this.DB.findOne(data.userId);
    let result = false;
    if (findone) {
      this.DB.update(data);
      result = true;
    } else {
      this.DB.create(data);
      result = true;
    }
    return result;
  }

  async sendKey(userId: string): Promise<boolean> {
    const key = Math.floor(Math.random() * (999999 - 100000) + 100000);
    const Save = {
      key,
      userId,
    };
    let result = false;
    await this.mailer
      .sendMail({
        to: `${userId}`, // List of receivers userId address
        from: `${this.config.get<string>('MAILID')}@naver.com`, // Senders userId address
        subject: '인증메일입니다. ✔', // Subject line
        text: `인증번호 : ${key}`, // plaintext body
      })
      .then(() => {
        console.log('succes mail');
        this.saveKey(Save);
        result = true;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  }

  async verifyKey(data: verfiyDTO): Promise<boolean> {
    const findData = await this.DB.findOne(data.userId);

    if (findData.key === data.key) {
      return true;
    } else {
      return false;
    }
  }
}
