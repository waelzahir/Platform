import BackEndUrl from "../coreutils/backendurl"
import { toast } from "react-toastify"
import { Offer } from "../types/offer.type"
import { Application } from "../types/application.type"
import { offertemplate } from "../components/Recrutercomponents/CreateOffer"

export const Postoffer = async (offer :Offer, setcompany:any) => {
    
    offer.Posting_date = new Date().toDateString()
    try {
        const res  = await fetch(`${BackEndUrl}/offer`, 
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(offer)
        }
        )
        if (res.ok)
            {
                toast("offer created succesfully")
                setcompany(offertemplate())
            }
        else
        {
            const data = await res.json()
            toast.error(Array.isArray(data.message) ? data.message[0] :data.message )
        }
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
export const Getoffer = async (setjobs: React.Dispatch<React.SetStateAction< Offer [] | null>>, offset= 0, type = "" , search = "" ) =>
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


export const apllytojob = async (creds :Application) => {
    try 
    {
        const res  = await fetch(`${BackEndUrl}/offer/Apply`, 
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
                toast("apllication in success")

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