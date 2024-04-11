import { useEffect } from "react"
import { Getoffer } from "./offers"
import { JobType } from "./Job.type"

export const useJobs = (setjobs: React.Dispatch<React.SetStateAction<JobType[] | null>>) =>
{
    useEffect(() => {
        Getoffer(setjobs)
    }, [])
}