import { useState } from "react";

export const JobSearch = ({ settypequery, setserchquery, setSearch, setofsset }: { settypequery: any, setserchquery: any, setSearch: any, setofsset: any }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [type, setType] = useState("title");

    const handleSearch = () => {
        settypequery(type);
        setserchquery(searchQuery);
        setSearch((prevState: boolean) => !prevState);
        setofsset(0);
    };

    return (
        <div className="w-full flex items-center justify-center mt-5">
            <div className="flex w-[90%] flex-row justify-between gap-x-6 items-center rounded-lg border border-gray-300 p-4">
                <div className="flex items-center">
                    <label className="mr-4 font-semibold">Search Query:</label>
                    <input
                        type="text"
                        className="w-72 h-10 px-4 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter job title or company"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <TypeButton type={type} setType={setType} buttonText="title" />
                    <TypeButton type={type} setType={setType} buttonText="Company" />
                </div>
                <button
                    className="px-6 py-2 rounded  bg-green-500 text-white font-semibold hover:bg-green-600"
                    onClick={handleSearch}
                >
                    search
                </button>
            </div>
        </div>
    );
};

const TypeButton = ({ type, setType, buttonText }: { type: string, setType: any, buttonText: string }) => {
    return (
        <button
            className={`px-4 py-2 w-36 rounded  ${type === buttonText ? "bg-green-500 text-white" : "bg-gray-200"}`}
            onClick={() => setType(buttonText)}
        >
            {buttonText}
        </button>
    );
};
