import { Module } from '@nestjs/common';
import { EmailVerifyService } from './email-verify.service';
import { EmailVerifyController } from './email-verify.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfigService } from 'config/mailer.config';

@Module({
  imports: [MailerModule.forRootAsync({ useClass: mailerConfigService })],
  providers: [EmailVerifyService],
  controllers: [EmailVerifyController],
})
export class EmailVerifyModule {}
