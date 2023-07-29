import { Module } from '@nestjs/common';
import { emailVerifyModule } from './email-verify/email-verify.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'config/typeorm.config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    emailVerifyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
