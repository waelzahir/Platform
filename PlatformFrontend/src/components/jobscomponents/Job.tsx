import { Link } from "react-router-dom"
import { JobType } from "../../data/Job.type"

const Job = ({jobs, index}: {jobs:JobType[] | null, index:number}) =>
{
    if (!jobs)
            return <Error message="no listing"/>
    if (jobs.length <= index || index < 0)
            return <Error message="Wrong entry"/>
    return (
        <div className=" min-h-9 w-full">
            {
                jobs[index].title 
                
            }
            {

            jobs[index].Company
            }
            <Link to={`/application/${jobs[index].id}`}>
                <div className="border-2">
                    Apply
                </div>
            </Link>
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