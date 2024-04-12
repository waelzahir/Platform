import { offerType } from "../../data/offers";

export const JobOffers = ({offers, index, setindex}: {offers: offerType[] | null, index : number, setindex:any}) =>
{
    if (!offers)
            return null
    return (
        <div>
            {
                offers.map((o :offerType) => <ROfferListing offer={o}/>)
            }
        </div>
    )
}

const ROfferListing = ({offer}:{offer:offerType}) =>
{
    let lenght = 0
    if (Array.isArray(offer?.applications))
        lenght = offer.applications.length
    return (
        <div>
            <h1>
                {offer.Company}
            </h1>
            <h1>
                {offer.title}
            </h1>
            <h1>
                {lenght}
            </h1>
        </div>
    )
}