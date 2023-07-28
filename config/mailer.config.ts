import { MailerModule, MailerOptionsFactory } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class mailerConfigService implements MailerOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createMailerOptions(): MailerModule {
    return {
      transport: {
        host: 'smtp.naver.com',
        port: 587,
        secure: false,
        auth: {
          user: this.configService.get<string>('MAILID'),
          pass: this.configService.get<string>('MAILPW'),
        },
      },
    };
  }
}

// {
//   transport: {
//     host: 'smtp.naver.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'starship5758@naver.com', // generated ethereal user
//       pass: 'benefit5758!', // generated ethereal password
//     },
//   },
//   defaults: {
//     from: '"nest-modules" <user@outlook.com>', // outgoing email ID
//   },
//   template: {
//     dir: process.cwd() + '/template/',
//     adapter: new EjsAdapter(), // or new PugAdapter()
//     options: {
//       strict: true,
//     },
//   },
// }
