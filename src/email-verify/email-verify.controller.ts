import { Controller, Get } from '@nestjs/common';
import { EmailVerifyService } from './email-verify.service';

@Controller('email-verify')
export class EmailVerifyController {
  constructor(private readonly EmailService: EmailVerifyService) {}

  @Get()
  SendMail() {
    return this.EmailService.sendHello();
  }
}
