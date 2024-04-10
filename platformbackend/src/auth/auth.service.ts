import { HttpCode, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from './Payload';
import { AuthDto, Authin } from './SignUpDto.Dto';
import { createHash } from "crypto";
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma} from '@prisma/client';


@Injectable()
export class AuthService {

    constructor(
        private readonly jwtservice: JwtService,
        private readonly prisma: PrismaService
    )  {}

    async   signupuser (user: AuthDto) {
        try {
            const User : User = await this.prisma.user.create(
                {
                   data:{
                    Username: user.Username,
                    firstname: user.firstname,
                    lasttname: user.lastname,
                    password : createHash("sha256").update(user.Password).digest("hex"),
                    accounttype:user.accountType
                   }
                }
            ) 

        }
        catch (error) {
          if (error instanceof Prisma.PrismaClientKnownRequestError)
                throw new HttpException("Faulty credentials", HttpStatus.FORBIDDEN)
          throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST)
        }
        const Payload : TokenPayload = {
            User: user.Username,
            Role: user.accountType
        }
        return {
            user :Payload,
            JWT : await this.newAccessToken(Payload)
        }
    }

    async   signinuser (user: Authin) {
            const User : User = await this.prisma.user.findUnique(
                {
                  where : {
                    Username: user.Username
                  }
                }
            ) 
            if (!User || User.password != createHash("sha256").update(user.Password).digest("hex"))
                throw new UnauthorizedException()    
        const Payload : TokenPayload = {
            User: User.Username,
            Role: User.accounttype
        }
        return {
            user :Payload,
            JWT : await this.newAccessToken(Payload)
        }
    }

    async newAccessToken(payload: TokenPayload)
    {
        let token = await this.jwtservice.signAsync(
            payload,
            {
                secret: process.env.JWTSECRET,
			    expiresIn: "15m",
            }   
        )
        console.log("verified ", await this.jwtservice.verifyAsync(token, {
            secret:process.env.JWTSECRET
        }))
        return token;
    }
}
