import BackEndUrl from "../coreutils/backendurl"
import { toast } from "react-toastify"
import { JobType } from "./Job.type"



export const Postoffer = async (offer :any) => {
    
    try {
        const res  = await fetch(`${BackEndUrl}/offer`, 
        {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(offer)
        }
        )
        if (res.ok)
            toast("offer created succesfully")
        else
        toast.error(res.statusText)
    }
    catch {
        toast.error("network error")
    }
}
export const deleteoffer = async (offer_id:number) => {
    try {
        const res  = await fetch(`${BackEndUrl}/offer/${offer_id}`, 
            {
                method: "DELETE",
                credentials: "include",
            })
        if (res.ok)
            toast("offer deleted succesfully")
        else
        toast.error(res.statusText)
    }
    catch {
        toast.error("network error")
    }
}
export const Getoffer = async (setjobs: React.Dispatch<React.SetStateAction< JobType [] | null>>, offset= 0, type = "" , search = "" ) =>
{
    const query = `?offset=${offset}&type=${type}&search=${search}`
    try {
        const res  = await fetch(`${BackEndUrl}/offer${query}`, {method: "GET",})
        if (res.ok)
            setjobs(await res.json())
        else
        toast.error(res.statusText)
    }
    catch {
        toast.error("network error")
    }
}


