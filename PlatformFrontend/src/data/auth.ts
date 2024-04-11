import { USER } from "../Context/Authcontext"
import BackEndUrl from "../coreutils/backendurl"

export const login = async (creds :any) => {
    const res  = await fetch(`${BackEndUrl}/signin`, 
        {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(creds)
        }
    )
}

export const signup = async (creds :any) => {
    const res  = await fetch(`${BackEndUrl}/signup`, 
        {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(creds)
        }
    )
}

export const logout = async (setUser:React.Dispatch<React.SetStateAction<USER | null>>) => {
    const res  = await fetch(`${BackEndUrl}/Logout`, 
        {
            method: "POST",
            credentials: "include",
        }
    )
    if (res.ok)
        setUser(null)
}