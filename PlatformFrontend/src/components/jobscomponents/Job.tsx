import { Link } from "react-router-dom"
import { Offer } from "../../types/offer.type"

const Job = ({jobs, index}: {jobs:Offer[] | null, index:number}) =>
{
    if (!jobs)
            return <Error message="no listing"/>
    if (jobs.length <= index || index < 0)
            return <Error message="Wrong entry"/>
    return (
        <div className="  w-full">
            <div className="min-h-9  mt-4 border-2 w-[99%]">
            <div className="mt-3 ml-3 w-full">
                <h1 className="text-2xl w-full text-center">
                    {jobs[index].Job_title}
                </h1>
                <div className="font-mono w-full text-center">
                    {jobs[index].Employer}
                </div>
                <div className="font-mono w-full text-center">
                    posted: {jobs[index].Posting_date}
                </div>
            </div>
            <div className="mt-3 ml-3">
                <h1 className="text-xl">
                    HeadQuarters
                </h1>
                <div className="font-mono">
                {jobs[index].Company_location}
                </div>
            </div>
            <div className="mt-3 ml-3">
                <h1 className="text-xl">
                    Company Description
                </h1>
                <div className="font-mono">
                    {jobs[index].Company_description}
                </div>
            </div>
            <div className="mt-3 ml-3">
                <h1 className="text-xl">
                    Job Location
                </h1>
                <div className="font-mono">
                    {jobs[index].Job_Location}
                </div>
            </div>
            <div className="mt-3 ml-3">
                <h1 className="text-xl">
                    Wages
                </h1>
                <div className="font-mono">
                    {jobs[index].Wages}
                </div>
            </div>
            <div className="mt-3 ml-3">
                <h1 className="text-xl">
                    Experience Required
                </h1>
                <div className="font-mono">
                    {jobs[index].Experience}
                </div>
            </div>
            <div className="mt-3 ml-3">
                <h1 className="text-xl">
                    job Description
                </h1>
                <div className="font-mono">
                    {jobs[index].description}
                </div>
            </div>
            <div className="mt-3 ml-3">
                <h1 className="text-xl">
                    Responsibilities
                </h1>
                <div className="font-mono">
                    {jobs[index].role_Responsibilities}
                </div>
            </div>
            <div className="mt-3 ml-3">
                <h1 className="text-xl">
                    Requirements
                </h1>
                <div className="font-mono">
                    {jobs[index].role_Requirements}
                </div>
            </div>
            <div className="mt-3 ml-3">
                <h1 className="text-xl">
                    starting date
                </h1>
                <div className="font-mono bg-white">
                    {jobs[index].Start_date}
                </div>
            </div>
            <div className="w-full flex justify-center items-center mb-5">
                    <Link className="" to={`/application/${jobs[index].id}`}>
                        <button className=" w-32 h-10 rounded mt-5 bg-green-950 text-white">
                            Apply
                        </button>
                    </Link>
            </div>
            </div>


        </div>
    )
}

const Error = ({message}:{message:string}) =>
{
    return (
        <div className="w-full h-32 font-bold flex justify-center items-center">
            {message}
        </div>
    )
} 
export default Job