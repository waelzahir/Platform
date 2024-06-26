import { Application } from "./application.type"
import { User } from "./user.type"

export type Offer = {
    id:number
    Employer :  string
    Job_title : string
    Company_location :  string
    Wages? :  string
    Experience? :  string
    description? :  string
    Job_Location? :  string
    Company_description? :  string
    role_Responsibilities? :  string
    role_Requirements? :  string
    Start_date? :  string
    Posting_date? :  string
    recruter_id: User
    applications : Application []
}
