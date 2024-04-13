import { useContext, useEffect, useState } from "react";
import { USERContext } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";
import { useOffers } from "../data/JobsHook";
import { CreateOffer } from "./Recrutercomponents/CreateOffer";
import { JobOffers } from "./Recrutercomponents/JobOffers";
import { Offer } from "../types/offer.type";
import { OfferSummary } from "./Recrutercomponents/OfferSummary";

const Recruter = () =>
    {
        const user = useContext(USERContext)
        const [ofsset, setofsset] = useState(0)
        const [offers, setoffers] = useState< Offer[] | null>(null)
        const [index, setindex] = useState(0)


        const navigate = useNavigate();
        useEffect(() =>{
            if (!user)
                navigate("/authentication")
        },[])
        useOffers(ofsset, setoffers)
        return (
            <div className="w-full flex  justify-center pb-10">
                <div className=" w-[90%] flex  items-center border-2 flex-col">
                    <CreateOffer />
                    <div className=" w-full flex flex-row ">
                        <JobOffers ofsset={ofsset} offers={offers} setofsset={setofsset}  setindex={setindex}/>
                        <OfferSummary index={index} offers={offers}/>
                    </div>
                </div>
            </div>
        )
    }
    
    export default Recruter