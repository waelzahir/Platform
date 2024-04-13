import { toast } from "react-toastify"
import { Application } from "../../types/application.type"
import { Offer } from "../../types/offer.type"

export const OfferSummary= ({index, offers}: {index: number, offers: Offer [] | null}) => {
    return (
        <div className="flex-1 m-2 mx-2 border-2" >
            {
                (!offers || !Array.isArray(offers[index].applications) || !offers[index].applications.length) ?
                <h1> no application currentrly </h1>
                :
                offers[index].applications.map((Applicant: Application) =>
                    <div>
                        <h1>{Applicant.name}</h1> 
                        <h1>{Applicant.email}</h1> 
                        <h1>{Applicant.phonenumber}</h1> 
                    </div>
                )
            }
        </div>
    )
}