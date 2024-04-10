import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtservice: JwtService,
    )  {}

    async generatetoken(Payload)
    {
        console.log(process.env.JWTSECRET)
        this.jwtservice.signAsync(
            Payload,
            {
                secret: process.env.JWTSECRET,
			    expiresIn: "15m",
            }   
        )
    }
}
