import { IsEmail, IsNumber, MaxLength, Min, MinLength, maxLength } from "class-validator"

export class applyDto
{
    @IsNumber()
    @Min(0)
    id:number
    @MinLength(3)
    name:string
    @IsEmail()
    email:string
    @MinLength(10)
    phonenumber:string
}
