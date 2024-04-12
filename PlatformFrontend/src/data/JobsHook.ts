import { useEffect } from "react"

import { getrecruteroffers } from "./recrute.data"
import { Offer } from "../types/offer.type"
import { Getoffer } from "./offers"

export const useJobs = (setjobs: React.Dispatch<React.SetStateAction<Offer[] | null>>) =>
{
    useEffect(() => {
        Getoffer(setjobs)
    }, [])
}

export const useOffers = (index: number, setoffers: React.Dispatch<React.SetStateAction< Offer[] | null>>) =>
    {
        useEffect(() => {
            getrecruteroffers(setoffers, index)
        }, [index])
    }