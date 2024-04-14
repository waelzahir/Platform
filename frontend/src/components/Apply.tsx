import { useContext, useEffect, useState } from "react";
import { USERContext } from "../Context/Authcontext";
import { useNavigate, useParams } from "react-router-dom";
import { apllytojob } from "../data/offers";

const Apply = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    
    const user = useContext(USERContext);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (!user) navigate("/authentication");
    }, [user, navigate]);

    if (params.id === undefined) return null;

    const handleApply = async () => {
            await apllytojob({
                id: +params.id,
                email,
                name,
                phonenumber: phone,
            });
    
    };

    return (
        <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Apply for Job</h2>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                type="text"
                className="w-full h-10 px-4 mb-4 border rounded focus:outline-none focus:border-green-400"
            />
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                className="w-full h-10 px-4 mb-4 border rounded focus:outline-none focus:border-green-400"
            />
            <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                type="text"
                className="w-full h-10 px-4 mb-4 border rounded focus:outline-none focus:border-green-400"
            />

            <button
                onClick={handleApply}
                className={`w-full h-10 rounded  bg-green-500 text-white font-semibold hover:bg-green-600`}
            >
                 Apply
            </button>

           
        </div>
    );
};

export default Apply;
