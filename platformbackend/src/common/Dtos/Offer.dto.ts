import { MinLength } from "class-validator"

export class OfferDto {
    @MinLength(3)
    title: string
    @MinLength(3)
    Company: string
}