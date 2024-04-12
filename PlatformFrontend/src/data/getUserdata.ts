import { USER } from "../Context/Authcontext";
import Cookies from "js-cookie";


export const getUserdata = () : USER | null =>
{
    try
    {
        let user = Cookies.get("UserData")
        if (typeof user ==="string")
            {
                let parsed =  JSON.parse(user) as USER
                return (parsed.Role === undefined || parsed.User=== undefined || parsed.id===undefined) ? null : parsed; 
            }
    }
    catch {

    }

        return null
} 