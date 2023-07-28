import { Module } from '@nestjs/common';
import { EmailVerifyModule } from './email-verify/email-verify.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from 'config/typeorm.config';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { mailerConfigService } from 'config/mailer.config';

// import { mailerConfigService } from 'config/mailer.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    MailerModule.forRootAsync({ useClass: mailerConfigService }),
    EmailVerifyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
