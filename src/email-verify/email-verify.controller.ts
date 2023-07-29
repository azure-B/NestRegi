import { Body, Controller, Get } from '@nestjs/common';
import { EmailVerifyService } from './email-verify.service';

@Controller('email-verify')
export class EmailVerifyController {
  constructor(private readonly EmailService: EmailVerifyService) {}

  @Get()
  SendMail(@Body() { email }: { email: string }) {
    return this.EmailService.sendHello(email);
  }
}
