import { Module } from '@nestjs/common';
import { EmailVerifyModule } from './email-verify/email-verify.module';

@Module({
  imports: [EmailVerifyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
