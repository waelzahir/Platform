import { Body, Controller, Get, HttpException, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, Authin } from '../common/Dtos/SignUpDto.Dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly Prisma: PrismaService
  ) {}
  

  @Post("signup")
  async signup(@Res() response: Response,   @Body() User: AuthDto){
    console.log(User)  
    const {user, JWT} = await this.authService.signupuser(User);
    response.cookie("AccesToken", JWT, {
      httpOnly: true,
      secure: false,
      maxAge:  15 * 60,
    });
    response.cookie("UserData", JSON.stringify(user), {
			httpOnly: false,
		});
    response.end()
  }



  @Post("signin")
  async signin(@Res() response : Response, @Body() User: Authin) {
    const {user, JWT} = await this.authService.signinuser(User);
    response.cookie("AccesToken", JWT, {
      httpOnly: true,
      secure: false,
      maxAge:  15 * 60,
    });
    response.cookie("UserData", JSON.stringify(user), {
			httpOnly: false,
		});
    response.end()
  }

  @Get("Logout")
  async Logout(@Res() response : Response) {
    response.cookie("AccesToken", "", { expires: new Date(Date.now()) });
    response.cookie("UserData", "", { expires: new Date(Date.now()) });
    response.end()
  }
}
