import { JobType } from "../../data/Job.type"

const Joblist = ({jobs , setindex}:{jobs : JobType [] | null, setindex:any} ) => 
{
    return (
        <div className="min-h-6 w-96   bg-gray-400 rounded">
            <div className="m-2 w-full flex justify-center font-bold">
                Offers List
            </div>
            <div className="flex flex-col gap-y-3">
                {
                !jobs ?
                <NoListing/>
                :
                jobs.length === 0 ?
                <NoListing/>
                :
                jobs.map((job:JobType, index:number) => <Listing key={job.id} job={job} clicked={() => setindex(index)} />)
                }
            </div>
        </div>
    )
}
const Listing = ({job, clicked}:{job : JobType, clicked:any}) =>
{ 
    return (
        <div onClick={clicked} className="w-full h-20 bg-green-200 flex flex-col justify-center items-center cursor-pointer   ">
            <h1 className="w-[90%]">
               {job.title}
            </h1>
            <h1 className="w-[90%]">
                {job.Company}
            </h1>
        </div>
    )
}
const NoListing = () => {
    return (
        <div className="bg-red-300 h-16 flex justify-center items-center">
            <h1>
                coudnt find your job
            </h1>
        </div>
    )
}
export default Joblist