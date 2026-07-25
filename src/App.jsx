import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from "./components/Dashboard.jsx"
import ResidentLogin from "./pages/ResidentLogin.jsx"
import AdminLogin from "./pages/AdminLogin.jsx"
import Register from "./pages/Register.jsx"
import ResidentDashboard from "./pages/ResidentDashboard.jsx"
import AdminDashboard from "./pages/AdminDashboard.jsx"
import SuperAdmin from "./pages/SuperAdmin.jsx"
function App() {
//   const [count, setCount] = useState(0);
//    const [society, setSociety] = useState({});
//      useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/society")
//       .then((res) => {
//         setSociety(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  return (
     <BrowserRouter>
      <Routes>
            <Route path="/" element={<Dashboard />} />
    <Route path="/users" element={<Dashboard />} />
        <Route path="/resident-login" element={<ResidentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/register" element={<Register />} />
                 <Route path="/resident-dashboard" element={<ResidentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/super-admin-dashboard" element={<SuperAdmin />} />


        

      </Routes>
    </BrowserRouter>
  )
}

export default App
