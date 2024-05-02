import { useEffect } from "react";
import { Offer } from "../../types/offer.type";

export const JobOffers = ({ offers, ofsset, setofsset, setindex, index }: { offers: Offer[] | null; ofsset: number; setofsset: any; setindex: any, index:number }) => {
  useEffect(() => {
    setindex(0)

  }, [ofsset])
  if (!offers) return null;

  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow-md px-4 py-4">
      <div className="mt-4">
        {offers.map((o: Offer, inde: number) => (
          <ROfferListing offer={o} clickfun={() => setindex(inde)} key={inde + "listing"} highlight={inde === index} />
        ))}
      </div>
      <div className="flex justify-between items-center  border-t h-20 border-gray-200">
        {ofsset === 0 ? null : (
          <button
            onClick={() => setofsset((i: number) => i - 1)}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 focus:outline-none"
          >
            Previous
          </button>
        )}
        <h1 className="text-lg font-bold text-gray-800">Page {ofsset}</h1>
        {offers.length !== 10 ? null : (
          <button
            onClick={() => setofsset((i: number) => i + 1)}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 focus:outline-none"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

const ROfferListing = ({ offer, clickfun , highlight}: { offer: Offer; clickfun: any, highlight:boolean }) => {
  let lenght = 0;
  if (Array.isArray(offer?.applications)) {
    lenght = offer.applications.length;
  }

  return (
    <div onClick={clickfun} className= {`${highlight ? "bg-gray-200" : ""} h-32 p-4 flex justify-between items-center bg-gray-100 hover: rounded-lg cursor-pointer shadow-sm mb-4 `} >
      <div className="h-full flex flex-col justify-center max-w-56 pl-2">
        <h1 className="truncate w-full text-lg font-bold text-gray-800">
          {offer.Employer}
        </h1>
        <h1 className="truncate w-full text-md text-gray-600">
          {offer.Job_title}
        </h1>
      </div>
      <div className="h-full flex flex-col justify-center pr-2">
        <h1 className="text-md text-gray-600">
          Applications: {lenght}
        </h1>
      </div>
    </div>
  );
};

