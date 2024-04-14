import { useState } from "react"
import { Postoffer } from "../../data/offers"
import { Offer } from "../../types/offer.type"
export const offertemplate =():Offer =>
{

    return{
        Company_location:"",
        Employer:"",
        Job_title:"",
        Company_description:"",
        description:"",
        Experience:"",
        Job_Location:"",
        Start_date:"",
        Posting_date: "",
        role_Requirements:"",
        role_Responsibilities:"",
        Wages:"",
    }

}
const updateobj = (key:string, value:string, setter:React.Dispatch<React.SetStateAction<Offer>>) => 
{
    setter((obj:Offer) => {
        return {
            ...obj,
            [key]: value
        };
    })
}
export const CreateOffer =() =>
{
    const [offer, setoffer] = useState<Offer>(offertemplate())
    const [title, settitle] = useState("")
    const takeaction = () =>
    {
        Postoffer(offer, setoffer)
    }
    return (
        <div className="flex flex-col gap-2">
            <input value={offer.Employer} onChange={(e) => updateobj("Employer", e.target.value, setoffer)} type="text" placeholder="Employer"/>
            <input value={offer.Job_title} onChange={(e) => updateobj("Job_title", e.target.value, setoffer)} type="text" placeholder="Job_title"/>
            <input value={offer.Company_location} onChange={(e) => updateobj("Company_location", e.target.value, setoffer)} type="text" placeholder="Company_location"/>
            <input value={offer.Wages} onChange={(e) => updateobj("Wages", e.target.value, setoffer)} type="text" placeholder="Wages"/>
            <input value={offer.description}onChange={(e) => updateobj("description", e.target.value, setoffer)} type="text" placeholder="description"/>
            <input value={offer.Job_Location} onChange={(e) => updateobj("Job_Location", e.target.value, setoffer)} type="text" placeholder="Job_Location"/>
            <input value={offer.Company_description} onChange={(e) => updateobj("Company_description", e.target.value, setoffer)} type="text" placeholder="Company_description"/>
            <input value={offer.role_Responsibilities} onChange={(e) => updateobj("role_Responsibilities", e.target.value, setoffer)} type="text" placeholder="role_Responsibilities"/>
            <input value={offer.role_Requirements} onChange={(e) => updateobj("role_Requirements", e.target.value, setoffer)} type="text" placeholder="role_Requirements"/>
            <input value={offer.Start_date} onChange={(e) => updateobj("Start_date", e.target.value, setoffer)} type="text" placeholder="Start_date"/>
            <button onClick={takeaction} className="h-10 p-2 border-2" > create </button>
        </div>
    )
}