import { useContext, useEffect, useState } from "react";
import { USERContext } from "../Context/Authcontext";
import { useNavigate, useParams } from "react-router-dom";
import { apllytojob } from "../data/offers";

const Apply = () =>
    {
        const [name,setname] = useState("")
        const [email,setemail] = useState("")
        const [phone,setphone] = useState("")
        const user = useContext(USERContext)
        const navigate = useNavigate();
        const params = useParams()
        useEffect(() =>{
            if (!user )
                    navigate("/authentication")
        } ,[])
        if (params.id === undefined)
                return null;
        const takeaction  = () =>
            {
                apllytojob({
                    id: +params.id,
                    email:email,
                    name:name,
                    phonenumber:phone
                })
            }
        return (
            <div>
                <input value={name} onChange={(e) => setname(e.target.value)} placeholder="Name" type="text" />
                <input value={email} onChange={(e) => setemail(e.target.value)}  placeholder="email" type="text" />
                <input value={phone} onChange={(e) => setphone(e.target.value)}  placeholder="phone number" type="text" />

                <div className="border-2" onClick={takeaction}> apply </div>
            </div>
        )
    }
    
    export default Apply