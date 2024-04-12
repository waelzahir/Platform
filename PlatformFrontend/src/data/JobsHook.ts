import { useEffect } from "react"
import { Getoffer } from "./offers"
import { JobType } from "./Job.type"
import { getrecruteroffers } from "./recrute.data"

export const useJobs = (setjobs: React.Dispatch<React.SetStateAction<JobType[] | null>>) =>
{
    useEffect(() => {
        Getoffer(setjobs)
    }, [])
}

export const useOffers = (index: number, setoffers: React.Dispatch<React.SetStateAction<[] | null>>) =>
    {
        useEffect(() => {
            getrecruteroffers(setoffers, index)
        }, [index])
    }