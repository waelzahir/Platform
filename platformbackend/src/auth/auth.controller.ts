import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './SignUpDto.Dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly Prisma: PrismaService
  ) {}

  @Post("signup")
  async signup( @Body() User: any){
    console.log(User)

    return this.authService.generatetoken({
      nick: User.Username,
    })
  }
  @Post("signin")
  async signin(@Body() User: AuthDto) {
    return "hey"
  }


}
