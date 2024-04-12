import Cookies from "js-cookie";
import { User } from "../types/user.type";


export const getUserdata = () : User | null =>
{
    try
    {
        let user = Cookies.get("UserData")
        if (typeof user ==="string")
            {
                let parsed =  JSON.parse(user) as User
                return (parsed.Username === undefined || parsed.Username=== undefined || parsed.id === undefined) ? null : parsed; 
            }
    }
    catch {
    }
    return null
} 