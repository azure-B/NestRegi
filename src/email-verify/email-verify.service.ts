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

  async saveKey(data: verfiyDTO) {
    const findone = await this.DB.findOne(data.userId);
    if (findone) {
      this.DB.update(data);
    } else {
      this.DB.create(data);
    }
  }

  async sendKey(userId: string) {
    const key = Math.floor(Math.random() * (999999 - 100000) + 100000);
    const Save = {
      key,
      userId,
    };
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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async verifyKey(data: verfiyDTO) {
    const findData = await this.DB.findOne(data.userId);

    if (findData.key === data.key) {
      return `true`;
    } else {
      return `false`;
    }
  }
}
