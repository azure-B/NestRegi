import { Module } from '@nestjs/common';
import { verifyDB } from './verify.dbcontroll.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService })],
  providers: [verifyDB],
})
export class DbcontrollModule {}
