import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailVerifyService {
  constructor(private readonly mailer: MailerService) {}

  async sendHello() {
    await this.mailer
      .sendMail({
        to: 'starship5758@naver.com', // List of receivers email address
        from: 'starship5758@naver.com', // Senders email address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome', // plaintext body
        html: '<b>welcome</b>', // HTML body content
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
    return true;
  }
}
