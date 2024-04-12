import { useContext, useEffect, useState } from "react";
import { USERContext } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";
import { useOffers } from "../data/JobsHook";
import { CreateOffer } from "./Recrutercomponents/CreateOffer";
import { offerType } from "../data/offers";
import { JobOffers } from "./Recrutercomponents/JobOffers";

const Recruter = () =>
    {
        const user = useContext(USERContext)
        const [index, setindex] = useState(0)
        const [offers, setoffers] = useState< offerType[] | null>(null)

        const navigate = useNavigate();
        useEffect(() =>{
            if (!user)
                setTimeout(() => navigate("/authentication"), 0)
        },[])
        useOffers(index, setoffers)
        return (
            <div>
                <CreateOffer />
                <JobOffers index={index} offers={offers} setindex={setindex}/>
            </div>
        )
    }
    
    export default Recruter