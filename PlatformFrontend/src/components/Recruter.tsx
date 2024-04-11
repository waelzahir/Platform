import { useContext, useEffect } from "react";
import { USERContext } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";

const Recruter = () =>
    {
        const user = useContext(USERContext)
        const navigate = useNavigate();
        useEffect(() =>{
            if (!user)
                navigate("/authentication")
        } ,[])
        return (
            <div>
                recruter
            </div>
        )
    }
    
    export default Recruter