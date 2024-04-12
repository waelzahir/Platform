import { Offer } from "./offer.type"
import { User } from "./user.type"

export type Application =
{
    id :number
    name :string
    email :string
    phonenumber :string
    offer_id : Offer
    apllicant_id : User 
}