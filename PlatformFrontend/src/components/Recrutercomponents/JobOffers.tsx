import { Offer } from "../../types/offer.type"

export const JobOffers = ({offers, ofsset, setofsset, setindex}: {offers: Offer[] | null, ofsset : number, setofsset:any, setindex:any}) =>
{
    if (!offers)
            return null
    return (
        <div className=" w-80 ">
            <div className="w-full flex justify-evenly items-center h-10">
                {
                    ofsset === 0
                    ?null:
                    <button onClick={ () => setofsset((i:number) => i-1 ) }>prev</button>

                }
                <h1>
                    page {ofsset}
                </h1>
                 {
                    offers.length  !== 10
                    ?null:
                    <button onClick={ () => setofsset((i:number) => i+1 ) }>next</button>

                }
            </div>
            {
                offers.map((o :Offer, inde:number) => <ROfferListing offer={o} clickfun={() => setindex(inde)}/>)
            }

        </div>
    )
}

const ROfferListing = ({offer, clickfun}:{offer:Offer, clickfun:any}) =>
{
    let lenght = 0
    if (Array.isArray(offer?.applications))
        lenght = offer.applications.length
    return (
        <div onClick={clickfun} className="h-32 w-full flex  justify-between items-center border-2 mt-2">
            <div className="h-full flex flex-col  justify-center max-w-56 pl-2">
                <h1 className="truncate w-full ">
                    {offer.Employer}
                </h1>
                <h1 className="truncate w-full r ">
                    {offer.Job_title}
                </h1>
            </div>
            <div className="h-full  flex flex-col  justify-center pr-2">
                <h1>
                    Applications : {lenght}
                </h1>
            </div>
        </div>
    )
}