import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { verify } from 'src/email-verify/entitiy/email-verify.entity';
import { registerDBService, verifyDBService } from './dbcontroll.service';
import { users } from 'src/register/entitiy/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([verify])],
  providers: [verifyDBService],
  exports: [verifyDBService],
})
export class verifyDBModule {}

@Module({
  imports: [TypeOrmModule.forFeature([users])],
  providers: [registerDBService],
  exports: [registerDBService],
})
export class registerDBModule {}
