import { useEffect, useState } from "react"
import { JobSearch } from "./jobscomponents/Search"
import Joblist from "./jobscomponents/Joblist"
import Job from "./jobscomponents/Job"
import { Offer } from "../types/offer.type"
import { Getoffer } from "../data/offers"

const Jobs = () =>
    {
        const [index, setindex] = useState(0)
        const [ofsset, setofsset] = useState(0)
        const [serchquery, setserchquery] = useState("")
        const [typequery, settypequery] = useState("")
        const [jobs, setjobs] = useState< Offer[] | null>(null)
        const [Search, setSearch] = useState(false)
        useEffect(() => {
            Getoffer(setjobs, ofsset,typequery,serchquery)
            setindex(0)
            console.log("rerender", index, ofsset, serchquery, typequery, Search)
        }, [ofsset, Search])
        return (
            <div className="w-full flex flex-col  items-center">
               <JobSearch settypequery={settypequery} setserchquery={setserchquery} setSearch={setSearch} setofsset={setofsset}/>
               <div className="flex flex-row w-[90%] justify-center gap-x-7 mt-2 ">
                    <Joblist jobs={jobs} setindex={setindex} setoffset={setofsset} ofsset={ofsset}/>
                    <Job jobs={jobs} index={index} />
               </div>
            </div>
        )
    }
    
    export default Jobs