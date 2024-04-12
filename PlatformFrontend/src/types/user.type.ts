import { Application } from "./application.type"
import { accounttype } from "./eccounttype.type"
import { Offer } from "./offer.type"

export type User = {
    id :number
    Username: string
    accounttype: accounttype
    offers :Offer []
    applicatioms: Application[]
}