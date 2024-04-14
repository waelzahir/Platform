import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Jobs from "./components/Jobs"
import Recruter from "./components/Recruter"
import Apply from "./components/Apply"
import Auth from "./components/Auth"
import {  USERContext } from "./Context/Authcontext"
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
import { getUserdata } from "./data/getUserdata"
import { User } from "./types/user.type"

function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    setUser(getUserdata())
  },[])
  
  return (
    <div className="min-h-screen font-bold bg-gray-100">
      <USERContext.Provider value={user}>
        <Navbar setUser={setUser}/>
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Jobs />} />
            <Route path="/authentication" element={<Auth setUser={setUser}/>} />
            <Route path="/application/:id" element={<Apply />} />
            <Route path="/recruiter" element={<Recruter />} />
            <Route path="/*" element={<>Error: Page Not Found</>} />
          </Routes>
        </div>
        <ToastContainer/>
      </USERContext.Provider>
    </div>
  )
}

export default App