import { useContext } from "react";
import { USERContext } from "../Context/Authcontext";
import { Link } from "react-router-dom";
import { logout } from "../data/auth";
import { User } from "../types/user.type";

const Navbar = ({ setUser }: { setUser: React.Dispatch<React.SetStateAction<User | null>> }) => {
  const user = useContext(USERContext);

  const buttons = user ? (
    user.accounttype === "recruter" ? (
      <RecruterButtons user={user} setUser={setUser} />
    ) : (
      <ApplicantButtons user={user} setUser={setUser} />
    )
  ) : (
    <Unauthorized />
  );

  return (
    <nav className="flex justify-end items-center h-20 px-4 bg-gray-800 text-white">
      {buttons}
    </nav>
  );
};

const ApplicantButtons = ({ user, setUser }: { user: User; setUser: any }) => {
  return (
    <div className="w-full flex justify-between items-center space-x-4">
      <div>
        <Link to={"/"} className="text-xl font-bold truncate underline hover:text-green-700 mr-4">
          Home
        </Link>
      </div>
      <div className="flex flex-row w-52 justify-between">
          <h1 className="text-xl font-bold truncate">{user.Username}</h1>
          <Link to={"/"}>
            <button
              onClick={() => logout(setUser)}
              className="text-sm px-3 py-2 rounded bg-green-500 hover:bg-green-700 "
              >
              Logout
            </button>
          </Link>
      </div>
    </div>
  );
};

const RecruterButtons = ({ user, setUser }: { user: User; setUser: any }) => {
  return (
    <div className="w-full flex justify-between items-center space-x-4">
      <div>
        <Link to={"/"} className="text-xl font-bold truncate underline hover:text-green-700 mr-4">
          Home
        </Link>
        <Link
          to="/recruiter"
          className="text-xl font-bold truncate underline hover:text-green-700 mr-4"
          >
        Dashboard
        </Link>
      </div>
      <div className="flex flex-row w-52 justify-between">
          <h1 className="text-xl font-bold truncate">{user.Username}</h1>
          <Link to={"/"}>
            <button
              onClick={() => logout(setUser)}
              className="text-sm px-3 py-2 rounded bg-green-500 hover:bg-green-700 "
              >
              Logout
            </button>
          </Link>
      </div>
    </div>
  );
};

const Unauthorized = () => {
  return (
    <div className="flex items-center space-x-4 ">
      <Link to="/authentication" className="text-sm px-3 py-2 rounded bg-green-500 hover:bg-green-700 ">
        Login
      </Link>
    </div>
  );
};

export default Navbar;