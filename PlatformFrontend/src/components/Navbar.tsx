import { useContext } from "react"
import { USER, USERContext } from "../Context/Authcontext"
import { Link } from "react-router-dom"
import { logout } from "../data/auth"

const Navbar = ({setUser}:{setUser:React.Dispatch<React.SetStateAction<USER | null>>}) =>
{
    const user = useContext(USERContext)
    let buttons;
    if (user && user?.Role === "recruter")
        buttons = <Recruterbuttons user={user} setUser={setUser}/>
    else  if (user && user?.Role === "applicant")
        buttons = <Applicantbuttons user={user} setUser={setUser}/>
    else
        buttons = <Unothorized />
    
    return (
       buttons
    )
}
const Applicantbuttons = ({user, setUser} : {user :USER, setUser : any}) =>
{
    return (
        <div className="h-16 w-full flex fles-row items-center justify-end">
            <div  className=" h-10 mr-6 rounded bg-blue-600 flex justify-center items-center font-bold">
                <h1 className="p-2 max-w-[300px] truncate">
                    {user.User}
                </h1>   
            </div>
            <div onClick={() => {logout(setUser)}} className="w-20 h-10 mr-6 rounded bg-green-600 flex justify-center items-center font-bold cursor-pointer">
                    Logout
            </div>
        </div>

    )
}

const Recruterbuttons = ({user, setUser} : {user :USER, setUser : any}) =>
{
    return (
        <div className="h-16 w-full flex fles-row items-center justify-between">
            <div  className=" h-10 ml-6 rounded bg-blue-600 flex justify-center items-center font-bold">
                <h1 className="p-2 max-w-[300px] truncate">
                    <Link to={"/dashboard"}>
                            Dashboard
                    </Link>
                </h1>   
            </div>
            <div className="flex">
                <div  className=" h-10 mr-6 rounded bg-blue-600 flex justify-center items-center font-bold">
                    <h1 className="p-2 max-w-[300px] truncate">
                        {user.User}
                    </h1>   
                </div>
                <div onClick={() => {logout(setUser)}} className="w-20 h-10 mr-6 rounded bg-green-600 flex justify-center items-center font-bold cursor-pointer">
                        Logout
                </div>
            </div>
        </div>
    )
}

const Unothorized = () => 
{
    return (
        <div className="h-16 w-full flex fles-row items-center justify-end">
           
                <div  className="w-20 h-10 mr-6 rounded bg-green-600 flex justify-center items-center font-bold">
                    <Link to={"/authentication"}>
                        Login
                    </Link>
                </div>
        </div>
    )
}
export default Navbar