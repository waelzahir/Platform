import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginaction, signupaction } from "../data/auth";
import { User } from "../types/user.type";
import { USERContext } from "../Context/Authcontext";

const Auth = ({ setUser }: { setUser: React.Dispatch<React.SetStateAction<User | null>> }) => {
  const user = useContext(USERContext);
  const [type, setType] = useState("signin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("applicant");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) setTimeout(() => navigate("/"), 0);
  }, [user]);

  const handleSignin = () => {
    loginaction({ Username: username, Password: password }, setUser);
  };

  const handleSignup = () => {
    signupaction({ Username: username, accountType: accountType, Password: password }, setUser);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {type === "signin" ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <input
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              onClick={handleSignin}
              className="w-full bg-green-500 text-white rounded-md py-2 hover:bg-green-600 "
            >
              Sign In
            </button>
            <p className="text-sm text-gray-600 mt-4 w-full text-center cursor-pointer " onClick={() => setType("signup")}>
              Don't have an account? Sign Up
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <input
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <div className="flex mb-4">
              <button
                onClick={() => setAccountType("applicant")}
                className={`flex-1 mr-2 border border-gray-300 rounded-md px-4 py-2 ${
                  accountType === "applicant" ? "bg-green-500 text-white" : ""
                }`}
              >
                Applicant
              </button>
              <button
                onClick={() => setAccountType("recruter")}
                className={`flex-1 ml-2 border border-gray-300 rounded-md px-4 py-2 ${
                  accountType === "recruter" ? "bg-green-500 text-white" : ""
                }`}
              >
                Recruiter
              </button>
            </div>
            <input
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              onClick={handleSignup}
              className="w-full bg-green-500 text-white rounded-md py-2 hover:bg-green-600 "
            >
              Sign Up
            </button>
            <p className="text-sm text-gray-600 mt-4 w-full text-center cursor-pointer" onClick={() => setType("signin")}>
              Already have an account? Sign In
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
