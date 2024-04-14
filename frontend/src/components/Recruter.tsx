import { useContext, useEffect, useState } from "react";
import { USERContext } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";
import { useOffers } from "../data/JobsHook";
import { CreateOffer } from "./Recrutercomponents/CreateOffer";
import { JobOffers } from "./Recrutercomponents/JobOffers";
import { OfferSummary } from "./Recrutercomponents/OfferSummary";
import { Offer } from "../types/offer.type";

const Recruter = () => {
  const user = useContext(USERContext);
  const [isCreateOfferOpen, setIsCreateOfferOpen] = useState(false);
  const [ofsset, setofsset] = useState(0);
  const [offers, setoffers] = useState<Offer[] | null>(null);
  const [index, setindex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/authentication");
  }, []);

  useOffers(ofsset, setoffers);

  const toggleCreateOffer = () => setIsCreateOfferOpen(!isCreateOfferOpen);

  return (
    <div className="flex flex-col w-full items-center py-10 bg-gray-200">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md px-8 py-6">
        <button
          className="w-full py-2 text-lg font-bold text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded-lg"
          onClick={toggleCreateOffer}
        >
          {isCreateOfferOpen ? "Close" : "Create New Offer"}
        </button>
        {isCreateOfferOpen && <CreateOffer />}
        <div className="flex mt-6 flex-col gap-4">
          <JobOffers ofsset={ofsset} offers={offers} setofsset={setofsset} setindex={setindex} index={index}/>
          {offers && index >= 0 && (
            <OfferSummary  index={index} offers={offers} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Recruter;
