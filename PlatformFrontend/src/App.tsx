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
      <div className="min-h-screen font-bold">
        <USERContext.Provider value={user}>
          <Navbar setUser={setUser}/>
          <Routes>
            <Route path="/" element={<Jobs />} />
            <Route path="/authentication" element={<Auth setUser={setUser}/>} />
            <Route path="/application/:id" element={<Apply />} />
            <Route path="/Recruter" element={<Recruter />} />
            <Route path="/*" element={<> error </> } />
          </Routes>
        </USERContext.Provider>
        <ToastContainer/>
      </div>
  )
}

export default App
