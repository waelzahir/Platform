import { toast } from "react-toastify"
import { USER } from "../Context/Authcontext"
import BackEndUrl from "../coreutils/backendurl"
import { signinType, signupType } from "./Auth.types"
import { getUserdata } from "./getUserdata";


export const loginaction = async (creds :signinType, setuser:any) => {
    try 
    {
        const res  = await fetch(`${BackEndUrl}/auth/signin`, 
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(creds)
        })
        if (res.ok)
            {
                toast("logged in success")
                setuser(getUserdata())

            }
        else
        {
            const data = await res.json()
            toast.error(Array.isArray(data.message) ? data.message[0] :data.message )
        }
    }
    catch 
    {
        toast.error("network error")
    }
}

export const signupaction = async (creds :signupType,  setuser:any) => {
    try 
    {
        const res  = await fetch(`${BackEndUrl}/auth/signup`, 
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(creds)
        })
        if (res.ok)
            {
                toast("joining success")
                setuser(getUserdata())
            }
        else
        {
            const data = await res.json()
            toast.error(Array.isArray(data.message) ? data.message[0] :data.message )
        }
    }
    catch 
    {
        toast.error("network error")
    }
}

export const logout = async (setUser:React.Dispatch<React.SetStateAction<USER | null>>) => {
    const res  = await fetch(`${BackEndUrl}/auth/Logout`, 
        {
            method: "Get",
            credentials: "include",
        }
    )
    if (res.ok)
        setUser(null)
}