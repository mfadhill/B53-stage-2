import React from "react";
import { Route, Routes } from 'react-router-dom'
import Register from "./pages/register";
import Login from "./pages/login";
import LandingPage from "./pages/landingPage";
import AddTransaction from "./pages/addTransaction";
import './index.css'

const App = () : React.JSX.Element => {
  
  return(
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addtransaction" element={<AddTransaction />} />
        <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default App