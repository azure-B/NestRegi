import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { emailVerifyService } from './email-verify.service';
import { verfiyDTO } from './dto/email-verify.dto';

@Controller('email')
export class emailVerifyController {
  constructor(private readonly EmailService: emailVerifyService) {}

  @Post()
  SendMail(@Body() { email }: { email: string }) {
    return this.EmailService.sendKey(email);
  }

  @Post('verify')
  verify(@Body() data: verfiyDTO) {
    console.log(data);
    return this.EmailService.verifyKey(data);
  }
}
