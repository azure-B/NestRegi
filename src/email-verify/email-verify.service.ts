import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailVerifyService {
  constructor(
    private readonly mailer: MailerService,
    private readonly config: ConfigService,
  ) {}

  async sendHello(email: string) {
    const key = Math.floor(Math.random() * (999999 - 100000) + 100000);

    const Save = {
      key,
      email,
    };

    await this.mailer
      .sendMail({
        to: `${email}`, // List of receivers email address
        from: `${this.config.get<string>('MAILID')}@naver.com`, // Senders email address
        subject: '인증메일입니다. ✔', // Subject line
        text: `인증번호 : ${key}`, // plaintext body
      })
      .then((success) => {
        console.log(success);
        this.saveKey(Save);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async saveKey({ key, email }: { key: number; email: string }) {
    console.log(key);
    console.log(email);
  }
}
