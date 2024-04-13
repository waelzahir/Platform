import { useEffect } from "react"

import { getrecruteroffers } from "./recrute.data"
import { Offer } from "../types/offer.type"


export const useOffers = (index: number, setoffers: React.Dispatch<React.SetStateAction< Offer[] | null>>) =>
{
    useEffect(() => {
        getrecruteroffers(setoffers, index)
    }, [index])
}