import { useContext } from "react"
import {  USERContext } from "../Context/Authcontext"
import { Link } from "react-router-dom"
import { logout } from "../data/auth"
import { User } from "../types/user.type"

const Navbar = ({setUser}:{setUser:React.Dispatch<React.SetStateAction<User | null>>}) =>
{
    const user = useContext(USERContext)
    let buttons;
    if (user && user?.accounttype === "recruter")
        buttons = <Recruterbuttons user={user} setUser={setUser}/>
    else  if (user && user?.accounttype === "applicant")
        buttons = <Applicantbuttons user={user} setUser={setUser}/>
    else
        buttons = <Unothorized />
    
    return (
       buttons
    )
}
const Applicantbuttons = ({user, setUser} : {user :User, setUser : any}) =>
{
    return (
        <div className="h-20  border-b-2 w-full flex fles-row items-center justify-end">
            <div className="flex flex-row justify-evenly w-96 items-center mr-6">
                <div  className=" h-10  flex justify-center items-center ">
                    <h1 className="p-2 w-40 truncate text-center font-bold">
                        {user.Username}
                    </h1>   
                </div>
                <div onClick={() => {logout(setUser)}} className="w-20 h-10  rounded bg-gray-400 hover:bg-gray-700 flex justify-center items-center font-bold cursor-pointer">
                        Logout
                </div>
            </div>
        </div>

    )
}

const Recruterbuttons = ({user, setUser} : {user :User, setUser : any}) =>
{
    return (
        <div className="h-20  border-b-2 w-full flex fles-row items-center justify-between">
            <Link to={"/Recruter"}>
                <div  className=" h-10 ml-6 rounded bg-gray-400 hover:bg-gray-500 flex justify-center items-center font-bold ">
                    <h1 className="p-2 max-w-[300px] truncate">
                            Recruter Dashboard
                    </h1>   
                </div>
            </Link>
            <div className="flex flex-row justify-evenly w-96 items-center mr-6">
                <div  className=" h-10  flex justify-center items-center ">
                    <h1 className="p-2 w-40 truncate text-center font-bold">
                        {user.Username}
                    </h1>   
                </div>
                <div onClick={() => {logout(setUser)}} className="w-20 h-10  rounded bg-gray-400 hover:bg-gray-500 flex justify-center items-center font-bold cursor-pointer">
                        Logout
                </div>
            </div>
        </div>
    )
}

const Unothorized = () => 
{
    return (
        <div className="h-20 border-b-2 w-full flex fles-row items-center justify-end">
           
                <div  className="w-20 h-10 mr-6 rounded bg-green-600 flex justify-center items-center font-bold">
                    <Link to={"/authentication"}>
                        Login
                    </Link>
                </div>
        </div>
    )
}
export default Navbar