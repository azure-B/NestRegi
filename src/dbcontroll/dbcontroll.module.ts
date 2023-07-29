import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { verify } from 'src/email-verify/entitiy/email-verify.entity';
import { dbcontrollService } from './dbcontroll.service';

@Module({
  imports: [TypeOrmModule.forFeature([verify])],
  providers: [dbcontrollService],
  exports: [dbcontrollService],
})
export class dbcontrollModule {}
