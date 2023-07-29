import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { verify } from 'src/email-verify/entitiy/email-verify.entity';
import { verifyDBService } from './dbcontroll.service';

@Module({
  imports: [TypeOrmModule.forFeature([verify])],
  providers: [verifyDBService],
  exports: [verifyDBService],
})
export class dbcontrollModule {}
