import { useContext } from "react"
import { USER, USERContext } from "../Context/Authcontext"
import { useNavigate } from "react-router-dom"


const Auth = ({setUser}:{setUser:React.Dispatch<React.SetStateAction<USER | null>>}) =>
    {
        const user = useContext(USERContext)
        const navigate = useNavigate();
        if (user)
            navigate("/")
        return (
            <div>
                auth
            </div>
        )
    }
    
export default Auth