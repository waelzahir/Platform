import { Offer } from "../../types/offer.type"

const Joblist = ({jobs , setindex}:{jobs : Offer [] | null, setindex:any} ) => 
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
                jobs.map((job:Offer, index:number) => <Listing key={job.id} job={job} clicked={() => setindex(index)} />)
                }
            </div>
        </div>
    )
}
const Listing = ({job, clicked}:{job : Offer, clicked:any}) =>
{ 
    return (
        <div onClick={clicked} className="w-full h-20 bg-green-200 flex flex-col justify-center items-center cursor-pointer   ">
            <h1 className="w-[90%]">
               {job.Job_title}
            </h1>
            <h1 className="w-[90%]">
                {job.Employer}
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