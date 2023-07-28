import { Module } from '@nestjs/common';
import { EmailVerifyService } from './email-verify.service';
import { EmailVerifyController } from './email-verify.controller';

@Module({
  providers: [EmailVerifyService],
  controllers: [EmailVerifyController],
})
export class EmailVerifyModule {}
