import { useContext } from "react"
import { USER, USERContext } from "../Context/Authcontext"
import { Link } from "react-router-dom"
import { logout } from "../data/auth"

const Navbar = ({setUser}:{setUser:React.Dispatch<React.SetStateAction<USER | null>>}) =>
{
    const user = useContext(USERContext)
   
    return (
        <div className="h-16 w-full flex fles-row items-center justify-end">
            {
                user ? 
                <>
                    <div  className=" h-10 mr-6 rounded bg-blue-600 flex justify-center items-center font-bold">
                        <h1 className="p-2 max-w-[300px] truncate">
                            {user.User}
                        </h1>                           
                        
                    </div>
                    <div onClick={() => {logout(setUser)}} className="w-20 h-10 mr-6 rounded bg-green-600 flex justify-center items-center font-bold cursor-pointer">
                            Logout
                    </div>
                </>
                :
                <div  className="w-20 h-10 mr-6 rounded bg-green-600 flex justify-center items-center font-bold">
                    <Link to={"/authentication"}>
                        Login
                    </Link>
                </div>

            }
        </div>
    )
}

export default Navbar