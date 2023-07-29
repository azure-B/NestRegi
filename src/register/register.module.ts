import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { registerDBModule } from 'src/dbcontroll/dbcontroll.module';

@Module({
  imports: [registerDBModule],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
