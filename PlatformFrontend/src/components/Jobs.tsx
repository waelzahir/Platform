import { useState } from "react"
import { JobSearch } from "./jobscomponents/Search"
import Joblist from "./jobscomponents/Joblist"
import Job from "./jobscomponents/Job"
import { useJobs } from "../data/JobsHook"
import { Offer } from "../types/offer.type"

const Jobs = () =>
    {
        const [index, setindex] = useState(0)
        const [jobs, setjobs] = useState< Offer[] | null>(null)
        useJobs(setjobs)
        return (
            <div className="  w-full flex flex-col  items-center">
               <JobSearch/>
               <div className="flex flex-row w-[90%] justify-center gap-x-7 ">
                    <Joblist jobs={jobs} setindex={setindex} />
                    <Job jobs={jobs} index={index} />
               </div>
            </div>
        )
    }
    
    export default Jobs