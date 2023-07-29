import { Body, Controller, Post } from '@nestjs/common';
import { usersDTO } from './dto/users.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  addUser(@Body() userData: usersDTO) {
    return this.registerService.addUser(userData);
  }
}
