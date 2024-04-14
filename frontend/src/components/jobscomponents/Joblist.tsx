import { Offer } from "../../types/offer.type";

const Joblist = ({ jobs, setindex, ofsset, setoffset }: { jobs: Offer[] | null, setindex: any, setoffset: any, ofsset: number }) => {
    return (
        <div className="min-h-96 w-96 max-w-xl mx-auto rounded-lg mt-5">
        
            <div className="px-4 py-2 bg-gray-200 rounded-t-lg text-center font-bold">
                Offers List
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {!jobs ? <NoListing /> :
                    jobs.length === 0 ? <NoListing /> :
                        jobs.map((job: Offer, index: number) => <Listing key={job.id} job={job} clicked={() => setindex(index)} />)
                }
            </div>
            <div className="flex justify-between px-4 py-2 bg-gray-200 rounded-b-lg">
                <button disabled={ofsset === 0} onClick={() => setoffset((i: number) => i - 1)} className={`px-4 py-2 rounded ${ofsset === 0 ? "opacity-50 cursor-not-allowed" : "bg-gray-300 hover:bg-gray-400"} focus:outline-none`}>Previous</button>
                <span className="text-gray-700">{ofsset}</span>
                {jobs && jobs.length === 10 &&
                    <button onClick={() => setoffset((i: number) => i + 1)} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 focus:outline-none">Next</button>
                }
            </div>
        </div>
    );
}

const Listing = ({ job, clicked }: { job: Offer, clicked: any }) => {
    return (
        <div onClick={clicked} className="bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:border-gray-300 transition duration-300">
            <h2 className="text-lg font-semibold">{job.Job_title}</h2>
            <p className="text-sm text-gray-600">{job.Employer}</p>
        </div>
    );
}

const NoListing = () => {
    return (
        <div className="bg-red-200 rounded-lg p-4 text-center">
            <p className="text-red-700">Couldn't find any jobs.</p>
        </div>
    );
}

export default Joblist;
