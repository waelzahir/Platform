import { useContext, useEffect, useState } from "react";
import { USERContext } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";
import { useOffers } from "../data/JobsHook";

const Recruter = () =>
    {
        const user = useContext(USERContext)
        const [index, setindex] = useState(0)
        const [offers, setoffers] = useState<[] | null>(null)

        const navigate = useNavigate();
        useEffect(() =>{
            if (!user)
                setTimeout(() => navigate("/authentication"), 0)
        },[])
        useOffers(index, setoffers)
        return (
            <div>
                recruter
            </div>
        )
    }
    
    export default Recruter