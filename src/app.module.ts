import { Module } from '@nestjs/common';
import { EmailVerifyModule } from './email-verify/email-verify.module';
import { ConfigModule } from '@nestjs/config';
import { DbcontrollModule } from './dbcontroll/dbcontroll.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EmailVerifyModule,
    DbcontrollModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
