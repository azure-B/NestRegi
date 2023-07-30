import { Module } from '@nestjs/common';
import { LoginoutService } from './loginout.service';
import { LoginoutController } from './loginout.controller';
import { registerDBModule } from 'src/dbcontroll/dbcontroll.module';

@Module({
  imports: [registerDBModule],
  providers: [LoginoutService],
  controllers: [LoginoutController],
})
export class LoginoutModule {}
