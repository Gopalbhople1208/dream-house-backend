import { ShieldUser, Mail, Lock, LogIn, Loader } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import Back from "../assets/background_Admin.png";

import Login from "../assets/login.png";

import {
  User,
  
  LockKeyhole,
} from "lucide-react";
import { residentAPI, getErrorMessage } from "../../services/api";

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setFormData((prev) => ({ ...prev, email: location.state.email, password: location.state.password || "" }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      // Call admin login API
      // Note: You need to add admin login endpoint in backend
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store JWT token
      localStorage.setItem("adminToken", data.token);

      // Store admin info
      localStorage.setItem("admin", JSON.stringify(data.admin));

      // Redirect to admin dashboard
      navigate("/admin-dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
      console.error("Admin login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="relative h-screen overflow-hidden">
      <img
        src={Login}
        alt="Login"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 py-2">
        <img
          src={Logo}
          alt="Dream House"
          className="h-16 sm:h-20 md:h-24 object-contain"
        />

        <div className="text-center mt-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950">
            Welcome to Dream House
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Please login to continue
          </p>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mt-2"></div>
        </div>

        <div className="w-full max-w-md mt-4">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative">
              <img
                src={Back}
                alt="Background"
                className="w-full h-24 object-cover"
              />
              <div className="absolute left-1/2 -bottom-7 -translate-x-1/2 w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <ShieldUser size={28} className="text-white" />
              </div>
            </div>

            <form onSubmit={handleLogin} className="px-6 pt-10 pb-5">
              <h2 className="text-2xl font-bold text-center text-amber-500">
                Admin Login
              </h2>
              <p className="text-center text-gray-500 text-sm mt-1">
                Login to access admin panel
              </p>
              <p className="text-center text-gray-500 text-sm mb-5">
                and manage your system
              </p>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                  {error}
                </div>
              )}

              <div className="relative mb-4">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email or Phone Number"
                  className="w-full border rounded-lg pl-11 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-950"
                  disabled={loading}
                />
              </div>

              <div className="relative mb-4">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full border rounded-lg pl-11 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-950"
                  disabled={loading}
                />
              </div>

              <div className="flex justify-between items-center text-sm mb-5">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-blue-950"
                    disabled={loading}
                  />
                  Remember Me
                </label>
                <button type="button" className="text-amber-500 hover:underline font-medium">
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-400 transition rounded-lg py-2.5 text-white font-semibold flex justify-center items-center gap-2"
              >
                <LogIn size={18} />
                {loading ? "Checking..." : "Login"}
              </button>

              <div className="flex justify-center items-center gap-2 text-gray-500 text-sm mt-5">
                <LockKeyhole size={16} />
                <span>Secure Admin Access</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
