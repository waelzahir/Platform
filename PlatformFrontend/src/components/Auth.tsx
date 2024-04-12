import { useContext, useState } from "react"
import { USER, USERContext } from "../Context/Authcontext"
import { useNavigate } from "react-router-dom"
import { loginaction, signupaction } from "../data/auth"


const Auth = ({setUser}:{setUser:React.Dispatch<React.SetStateAction<USER | null>>}) =>
    {
        const user = useContext(USERContext)
        const [type, settype] = useState(false)
        const navigate = useNavigate();
        if (user)
            setTimeout(() => navigate("/"), 0)
           
        return (
            <div className="w-full h-full flex flex-col  justify-center items-center">
               {
                    type ?
                    <>
                    <Signup setUser={setUser}/>
                    <h1 onClick={() => settype(false)} className="text-blue-600 cursor-pointer">
                        already have an account ?
                    </h1>
                    </>
                    :
                    <>
                        <Signin setUser={setUser}/>
                        <h1 onClick={() => settype(true)} className="text-blue-600 cursor-pointer">
                            create new account
                        </h1>
                    </>
               }
            </div>
        )
    }
      
const Signin = ({setUser}:{setUser:React.Dispatch<React.SetStateAction<USER | null>>}) => 
    {
        const [username, setusername] = useState("")
        const [password, setpassword] = useState("")
        const takeaction = () =>
        {
            loginaction({
                Username: username,
                Password :password
            }, setUser)
        }
        return (
            <div className="flex-1 flex flex-col w-[50%] justify-center gap-2 ">
                        <label className="text-md" >
                          Username
                        </label>
                        <input
                         className="rounded-md px-4 py-2 bg-inherit border mb-6"
                         value={username}
                         onChange={(e) => setusername(e.target.value)}
                         placeholder="Username"
                        />
                        <label className="text-md">
                          Password
                        </label>
                        <input
                        className="rounded-md px-4 py-2 bg-inherit border mb-6"
                        type="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="••••••••"
                        />
                        <button onClick={takeaction} className="rounded-md px-4 py-2 bg-inherit border mb-6 bg-green-100">sign in</button>
                </div>
        )
    }

    const Signup = ({setUser}:{setUser:React.Dispatch<React.SetStateAction<USER | null>>}) => 
        {
            const [type, settype] = useState("applicant")
            const [username, setusername] = useState("")
            const [password, setpassword] = useState("")
            console.log(type)
            const takeaction = () =>
                {
                        signupaction({
                            Username: username,
                            accountType:type,
                            Password:password
                        }, setUser)
                }
            return (
                <div className="flex-1 flex flex-col w-[50%] justify-center gap-2 ">

                    <label className="text-md" >
                      Username
                    </label>
                    <input
                      className="rounded-md px-4 py-2 bg-inherit border mb-6"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                      placeholder="Username"
                    />
                    <label className="text-md" >
                      Account type
                    </label>
                    <button onClick={() => settype("applicant")} className={`${type === "applicant"?"bg-green-500": ""} rounded-md px-4 py-2 bg-inherit border mb-6`}>applicant</button>
                    <button onClick={() => settype("recruter")} className={`${type === "recruter"?"bg-green-500": ""} rounded-md px-4 py-2 bg-inherit border mb-6`}>recruter</button>
                    <label className="text-md">
                      Password
                    </label>
                    <input
                      className="rounded-md px-4 py-2 bg-inherit border mb-6"
                      type="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      placeholder="••••••••"
                      />
                    <button onClick={takeaction} className="rounded-md px-4 py-2 bg-inherit border mb-6 bg-green-100">sign in</button>
                </div>
            )
        }
export default Auth