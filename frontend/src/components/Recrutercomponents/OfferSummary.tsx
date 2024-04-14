import { Application } from "../../types/application.type";
import { Offer } from "../../types/offer.type";

export const OfferSummary = ({ index, offers }: { index: number; offers: Offer[] | null }) => {
  if (!offers || offers.length <= index)
      return null
  return (
    <div className="flex-1 m-2 mx-2 border rounded-lg shadow-md px-4 py-4">
      {(!offers || !Array.isArray(offers[index].applications) || !offers[index].applications.length) && (
        <h1 className="text-gray-500 text-center">No applications for {offers[index].Job_title} in {offers[index].Employer}.</h1>
      )}
      {offers && Array.isArray(offers[index].applications) && offers[index].applications.length > 0 && (
        <ul className="list-disc pl-4">
          {offers[index].applications.map((applicant: Application) => (
            <li key={applicant.email} className="flex items-center py-2 border-b border-gray-200">
              <div className="flex w-full">
                <span className="text-gray-700 font-medium mr-2">Name:</span>
                <h1 className="text-gray-800 w-full truncate">{applicant.name}</h1>
              </div>
              <div className="flex w-full mt-1">
                <span className="text-gray-700 font-medium mr-2">Email:</span>
                <h1 className="text-gray-600 break-all">{applicant.email}</h1>
              </div>
              <div className="flex w-full mt-1">
                <span className="text-gray-700 font-medium mr-2">Phone:</span>
                <span className="text-gray-600">{applicant.phonenumber}</span> 
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
