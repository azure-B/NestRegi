import { MailerModule, MailerOptionsFactory } from '@nestjs-modules/mailer';
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
