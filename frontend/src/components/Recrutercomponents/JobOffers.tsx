import { Offer } from "../../types/offer.type";

export const JobOffers = ({ offers, ofsset, setofsset, setindex, index }: { offers: Offer[] | null; ofsset: number; setofsset: any; setindex: any, index:number }) => {
  if (!offers) return null;

  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow-md px-4 py-4">
      <div className="mt-4">
        {offers.map((o: Offer, inde: number) => (
          <ROfferListing offer={o} clickfun={() => setindex(inde)} key={o.id} highlight={inde === index} />
        ))}
      </div>
      <div className="flex justify-between items-center h-10 border-t border-gray-200">
        {ofsset === 0 ? null : (
          <button
            onClick={() => setofsset((i: number) => i - 1)}
            className="px-2 py-1 text-gray-500 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg"
          >
            Previous
          </button>
        )}
        <h1 className="text-lg font-bold text-gray-800">Page {ofsset}</h1>
        {offers.length !== 10 ? null : (
          <button
            onClick={() => setofsset((i: number) => i + 1)}
            className="px-2 py-1 text-gray-500 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg"
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

