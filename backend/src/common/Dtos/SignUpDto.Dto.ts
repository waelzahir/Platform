import { IsAlpha,  IsAlphanumeric,  IsEmail, IsEnum, IsString, IsStrongPassword, Max, MaxLength, Min, MinLength} from "class-validator";
import { accounttype } from "@prisma/client";


export class AuthDto
{
    @IsAlpha()
    @MinLength(6)
    @MaxLength(10)
    Username: string

    @IsEnum(accounttype)
    accountType: accounttype

    @IsStrongPassword()
    @MinLength(6)
    Password: string
}

export class Authin
{
    @IsAlpha()
    @MinLength(6)
    @MaxLength(10)
    Username: string

    @IsStrongPassword()
    @MinLength(6)
    Password: string
}