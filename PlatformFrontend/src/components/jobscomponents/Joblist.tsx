import { Offer } from "../../types/offer.type"

const Joblist = ({jobs , setindex, ofsset, setoffset}:{jobs : Offer [] | null, setindex:any, setoffset:any, ofsset:number} ) => 
{
    return (
        <div className="min-h-6 w-96    rounded mt-5 ml-2 mb-2">
            <div className="m-2 w-full flex justify-center font-bold">
                Offers List
            </div>
            <div className="flex flex-col gap-y-3 items-center w-full">
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
            <div className="w-full flex flex-row items-center h-10 justify-evenly">
                    {
                    ofsset === 0
                        ?null:
                        <button onClick={ () => setoffset((i:number) => i-1 ) }>previous</button>

                    }
                    <h1>
                        {ofsset}
                    </h1>
                     {
                         jobs && jobs.length  !== 10
                         ?null:
                        <button onClick={ () => setoffset((i:number) => i+1 ) }>next</button>

                    }
                </div>
        </div>
    )
}
const Listing = ({job, clicked}:{job : Offer, clicked:any}) =>
{ 
    return (
        <div onClick={clicked} className="w-72 h-20  flex flex-col justify-center items-center cursor-pointer rounded bg-gray-400  ">
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