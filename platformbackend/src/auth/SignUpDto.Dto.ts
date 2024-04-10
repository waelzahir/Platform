import { IsAlpha,  IsAlphanumeric,  IsEmail, IsEnum, IsStrongPassword, Max, Min} from "class-validator";
import { accounttype } from "@prisma/client";


export class AuthDto
{
    @IsAlphanumeric()
    @Min(4)
    @Max(10)
    Username: string

    // @IsAlpha()
    // @Min(4)
    // @Max(10)
    // firstname: string
    
    // @IsAlpha()
    // @Min(4)
    // @Max(10)
    // lastname: string

    // @IsEmail()
    // email: string

    // @IsEnum(accounttype)
    // accountType: accounttype

    // @IsStrongPassword()
    // @Min(6)
    // Password: string
}
