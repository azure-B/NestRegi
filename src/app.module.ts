import { Module } from '@nestjs/common';
import { emailVerifyModule } from './email-verify/email-verify.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'config/typeorm.config';
import { RegisterModule } from './register/register.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    emailVerifyModule,
    RegisterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
