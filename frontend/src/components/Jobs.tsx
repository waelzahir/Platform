import { useEffect, useState } from "react"
import { JobSearch } from "./jobscomponents/Search"
import Joblist from "./jobscomponents/Joblist"
import Job from "./jobscomponents/Job"
import { Offer } from "../types/offer.type"
import { Getoffer } from "../data/offers"

const Jobs = () => {
    const [index, setIndex] = useState(0)
    const [ofsset, setofsset] = useState(0)
    const [serchquery, setserchquery] = useState("")
    const [typequery, settypequery] = useState("")
    const [jobs, setjobs] = useState<Offer[] | null>(null)
    const [Search, setSearch] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        Getoffer(setjobs, ofsset, typequery, serchquery)
            .finally(() => setLoading(false))
        setIndex(0)
    }, [ofsset, Search])

    return (
        <div className="w-full flex flex-col items-center">
            <JobSearch settypequery={settypequery} setserchquery={setserchquery} setSearch={setSearch} setofsset={setofsset}/>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="flex flex-col md:flex-row w-full justify-center mt-4 gap-4">
                    <Joblist jobs={jobs} setindex={setIndex} setoffset={setofsset} ofsset={ofsset}/>
                    <Job jobs={jobs} index={index} />
                </div>
            )}
        </div>
    )
}

export default Jobs
