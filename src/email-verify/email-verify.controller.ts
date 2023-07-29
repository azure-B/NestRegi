import { Body, Controller, Post } from '@nestjs/common';
import { emailVerifyService } from './email-verify.service';

@Controller('email-verify')
export class emailVerifyController {
  constructor(private readonly EmailService: emailVerifyService) {}

  @Post()
  SendMail(@Body() { email }: { email: string }) {
    return this.EmailService.sendHello(email);
  }
}
