import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Jobs from "./components/Jobs"
import Recruter from "./components/Recruter"
import Apply from "./components/Apply"
import Auth from "./components/Auth"
import { USER, USERContext } from "./Context/Authcontext"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { getUserdata } from "./data/getUserdata"


function App() {
  const [user, setUser] = useState<USER | null>(null);
  useEffect(() => {
    setUser(getUserdata())
  },[])
  return (
      <div className="min-h-screen bg-blue-300">
        <USERContext.Provider value={user}>
          <Navbar setUser={setUser}/>
          <Routes>
            <Route path="/" element={<Jobs />} />
            <Route path="/authentication" element={<Auth setUser={setUser}/>} />
            <Route path="/application" element={<Apply />} />
            <Route path="/dashboard" element={<Recruter />} />
            <Route path="/*" element={<> error </> } />
          </Routes>
        </USERContext.Provider>
        <ToastContainer/>
      </div>
  )
}

export default App
