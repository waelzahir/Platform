import { Body, Controller, Get, HttpException, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, Authin } from '../common/Dtos/SignUpDto.Dto';
import { Request, Response } from 'express';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly Prisma: PrismaService
  ) {}
  

  @Post("signup")
  @Public()
  async signup( @Req() req: Request, @Res() response: Response,   @Body() User: AuthDto){
    const {user, JWT} = await this.authService.signupuser(User);
    response.cookie("AccesToken", JWT, {
      httpOnly: true,
      secure: false,
      maxAge:  15 * 60 * 1000,
    });
    response.cookie("UserData", JSON.stringify(user), {
      httpOnly: false,
      maxAge:  15 * 60 * 1000,
    });
    response.end()
  }



  @Post("signin")
  @Public()
  async signin(@Res() response : Response, @Body() User: Authin) {
    const {user, JWT} = await this.authService.signinuser(User);
    response.cookie("AccesToken", JWT, {
      httpOnly: true,
      secure: false,
      maxAge:  15 * 60 * 1000,
    });
    response.cookie("UserData", JSON.stringify(user), {
			httpOnly: false,
      maxAge:  15 * 60 * 1000,
		});
    response.end()
  }

  @Get("Logout")
  async Logout(@Res() response : Response) {
    response.cookie("AccesToken", "", { maxAge:0 , httpOnly: true, secure:false});
    response.cookie("UserData", "", { maxAge:0 });
    response.end()
  }
}
