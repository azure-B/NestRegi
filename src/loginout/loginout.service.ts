import { Injectable } from '@nestjs/common';
import { registerDBService } from 'src/dbcontroll/dbcontroll.service';

@Injectable()
export class LoginoutService {
  constructor(private readonly DB: registerDBService) {}
}
