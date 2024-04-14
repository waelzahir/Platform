import { toast } from "react-toastify"
import BackEndUrl from "../coreutils/backendurl"

export const getrecruteroffers = async (setOffers:any , offset = 0) =>
{
    const query = `?offset=${offset}`
    try {
        const res  = await fetch(`${BackEndUrl}/offer/applications${query}`, {method: "GET", credentials:"include"})
        if (res.ok)
            {
                setOffers(await res.json())
            }
        else
            toast.error(res.statusText)
    }
    catch {
        toast.error("network error")
    }
}