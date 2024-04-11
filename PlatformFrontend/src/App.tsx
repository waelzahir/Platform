import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Jobs from "./components/Jobs"
import Recruter from "./components/Recruter"
import Apply from "./components/Apply"
import Auth from "./components/Auth"
import { USER, USERContext } from "./Context/Authcontext"
import { useState } from "react"

function App() {
  const [user, setUser] = useState<USER | null>(null);
  return (
      <div className="min-h-screen bg-gray-900">
        <USERContext.Provider value={user}>
          <Navbar setUser={setUser}/>/>
          <Routes>
            <Route path="/" element={<Jobs />} />
            <Route path="/authentication" element={<Auth setUser={setUser}/>} />
            <Route path="/application" element={<Apply />} />
            <Route path="/dashboard" element={<Recruter />} />
            <Route path="/*" element={<> error </> } />

          </Routes>
        </USERContext.Provider>
      </div>
  )
}

export default App
