import { useState } from "react";
import { Postoffer } from "../../data/offers";
import { Offer } from "../../types/offer.type";

export const offertemplate = (): Offer => {
    return {
        Company_location: "",
        Employer: "",
        Job_title: "",
        Company_description: "",
        description: "",
        Experience: "",
        Job_Location: "",
        Start_date: "",
        Posting_date: "",
        role_Requirements: "",
        role_Responsibilities: "",
        Wages: "",
    };
};

const updateobj = (key: string, value: string, setter: React.Dispatch<React.SetStateAction<Offer>>) => {
    setter((obj: Offer) => {
        return {
            ...obj,
            [key]: value,
        };
    });
};

export const CreateOffer = () => {
    const [offer, setOffer] = useState<Offer>(offertemplate());

    const takeAction = () => {
        Postoffer(offer, setOffer);
    };

    return (
        <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Create Job Offer</h2>
            <textarea
                value={offer.Employer}
                onChange={(e) => updateobj("Employer", e.target.value, setOffer)}
                placeholder="Employer"
                className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-green-400"
            />
            <textarea
                value={offer.Job_title}
                onChange={(e) => updateobj("Job_title", e.target.value, setOffer)}
                placeholder="Job Title"
                className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-green-400"
            />
            <textarea
                value={offer.Company_location}
                onChange={(e) => updateobj("Company_location", e.target.value, setOffer)}
                placeholder="Company Location"
                className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-green-400"
            />
            <textarea
                value={offer.Wages}
                onChange={(e) => updateobj("Wages", e.target.value, setOffer)}
                placeholder="Wages"
                className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-green-400"
            />
            <textarea
                value={offer.description}
                onChange={(e) => updateobj("description", e.target.value, setOffer)}
                placeholder="Description"
                className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-green-400"
            />
            <textarea
                value={offer.Job_Location}
                onChange={(e) => updateobj("Job_Location", e.target.value, setOffer)}
                placeholder="Job Location"
                className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-green-400"
            />
            <textarea
                value={offer.Company_description}
                onChange={(e) => updateobj("Company_description", e.target.value, setOffer)}
                placeholder="Company Description"
                className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-green-400"
            />
            <textarea
                value={offer.role_Responsibilities}
                onChange={(e) => updateobj("role_Responsibilities", e.target.value, setOffer)}
                placeholder="Role Responsibilities"
                className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-green-400"
            />
            <textarea
                value={offer.Experience}
                onChange={(e) => updateobj("Experience", e.target.value, setOffer)}
                placeholder="Experience required"
                className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-green-400"
            />
            <textarea
                value={offer.role_Requirements}
                onChange={(e) => updateobj("role_Requirements", e.target.value, setOffer)}
                placeholder="Role Requirements"
                className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-green-400"
            />
            <textarea
                value={offer.Start_date}
                onChange={(e) => updateobj("Start_date", e.target.value, setOffer)}
                placeholder="Start Date"
                className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-green-400"
            />
            <button onClick={takeAction} className="w-full h-10 rounded bg-green-500 text-white font-semibold hover:bg-green-600">
                Create
            </button>
        </div>
    );
};
