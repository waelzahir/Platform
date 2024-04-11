import BackEndUrl from "../coreutils/backendurl"



export const Postoffer = async (offer :any) => {
    const res  = await fetch(`${BackEndUrl}/offer`, 
        {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(offer)
        }
    )
}
export const deleteoffer = async (offer_id:number) => {
    const res  = await fetch(`${BackEndUrl}/offer/${offer_id}`, 
        {
            method: "DELETE",
            credentials: "include",
        }
    )
}
export const Getoffer = async (offset= 0, type = "" , search = "" ) =>
{
   const query =  `?offset=${offset}&type=${type}&search=${search}`
   const res  = await fetch(`${BackEndUrl}/offer${query}`, {method: "GET",})
}


