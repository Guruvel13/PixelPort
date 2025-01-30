import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LandingPage from './Pages/LandingPage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
// import Logout from'./Pages/Lougout'
import Setting from './Pages/Setting'

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/sign-up" element={<Signup />} /> 
        <Route path="/landingpage" element={<LandingPage />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        {/* <Route path="/logout" element={<Logout />} />  */}
        <Route path="/setting" element={<Setting />} /> 
    </Routes>
    </BrowserRouter>
  )
}
export default App