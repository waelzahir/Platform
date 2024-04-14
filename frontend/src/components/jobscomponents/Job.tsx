import { Link } from "react-router-dom";
import { Offer } from "../../types/offer.type";

const Job = ({ jobs, index }: { jobs: Offer[] | null, index: number }) => {
    if (!jobs)
        return <Error message="No listing" />;
    if (jobs.length <= index || index < 0)
        return <Error message="Wrong entry" />;

    const job = jobs[index];

    return (
        <div className="flex-1 mx-auto mt-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl text-center font-bold mb-4">{job.Job_title}</h1>
                <p className="text-gray-700 text-sm text-center mb-4">{job.Employer}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <JobDetail label="Posted" value={job.Posting_date} />
                    <JobDetail label="Headquarters" value={job.Company_location} />
                    <JobDetail label="Company Description" value={job.Company_description} />
                    <JobDetail label="Job Location" value={job.Job_Location} />
                    <JobDetail label="Wages" value={job.Wages} />
                    <JobDetail label="Experience Required" value={job.Experience} />
                    <JobDetail label="Job Description" value={job.description} />
                    <JobDetail label="Responsibilities" value={job.role_Responsibilities} />
                    <JobDetail label="Requirements" value={job.role_Requirements} />
                    <JobDetail label="Starting Date" value={job.Start_date} />
                </div>
                <div className="flex justify-center mt-6">
                    <Link to={`/application/${job.id}`}>
                        <button className="w-full md:w-auto px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700">
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const JobDetail = ({ label, value }: { label: string, value: string | undefined }) => (
    <div>
        <h2 className="text-lg font-semibold">{label}</h2>
        <p className="text-gray-700">{value}</p>
    </div>
);

const Error = ({ message }: { message: string }) => (
    <div className="max-w-xl mx-auto mt-4 bg-red-200 text-red-700 p-4 rounded-lg text-center">
        {message}
    </div>
);

export default Job;
