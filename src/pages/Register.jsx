




import Login from "../assets/login.png";
import Logo from "../assets/logo.png";
import Back from "../assets/background.png";
import Register1 from "../assets/register.png"

import {
  User,
  UserRoundPlus, 
  Phone,
  Mail,
  Lock,
  LogIn,
  LockKeyhole,
  House,
  Building2 ,
  ShieldCheck,
  Loader
} from "lucide-react";
import { useState } from "react";
import { residentAPI, getErrorMessage } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.address
    ) {
      setError("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      // Call backend API using the API service
      const response = await residentAPI.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        address: formData.address,
      });

      setSuccess("✓ Registration successful! Redirecting to login...");

      // Clear form
      setFormData({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
      });

      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/resident-login");
      }, 2000);

    } catch (err) {
      const errorMsg = getErrorMessage(err);
      setError(errorMsg);
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative h-screen overflow-hidden">

      {/* Background */}
      <img
        src={Register1}
        alt="Login"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-start pt-3 px-4">

        {/* Logo */}
        <img
          src={Logo}
          alt="Dream House"
          className="h-16 sm:h-20 md:h-24 object-contain"
        />

        {/* Heading */}
        <div className="text-center ">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950">
            Create Your Account
          </h1>

          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Join our community and enjoy a better living experience
          </p>

          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mt-1"></div>

        </div>

        {/* Login Card */}
        <div className="w-full max-w-6xl  mt-4">

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[550px]">

            {/* Top Banner */}
            <div className="relative">

              <img
                src={Register1}
                alt="Background"
                className="w-full h-24 object-cover"
              />

              <div className="absolute left-1/2 -bottom-7 -translate-x-1/2 w-14 h-14 bg-blue-950 rounded-full flex items-center justify-center shadow-lg">

                <UserRoundPlus strokeWidth={1.75} 
                  size={35}
                  className="text-white ml-2"
                />

              </div>

            </div>

            {/* Card Body */}
            <form
            className="px-6 pt-8 pb-5"
            onSubmit={handleRegister}>

              <h2 className="text-2xl font-bold text-center text-blue-950">
                Resident Registration
              </h2>

              <p className="text-center text-gray-500 text-sm mt-1">
                Please fill in the details to create your account
              </p>

              <p className="text-center text-gray-500 text-sm mb-5">
                and manage your account
              </p>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                  {error}
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
                  {success}
                </div>
              )}

              {/* Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">

  
  <div className="relative">
    <User
      size={25}
      className="absolute left-4 top-5 -translate-y-1/2 text-gray-600"
    />

    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Full Name"
      className="w-full border rounded-lg pl-11 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-950"
      disabled={loading}
    />
  </div>

  {/* Phone */}
  <div className="relative">
    <Phone 
      size={18}
      className="absolute left-4 top-5 -translate-y-1/2 text-gray-700"
    />

    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Phone Number"
      className="w-full border rounded-lg pl-11 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-950"
      disabled={loading}
    />
  </div>

</div>

                {/* Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">

  
  <div className="relative">
    <Mail
      size={24}
      className="absolute left-4 top-5 -translate-y-1/2 text-gray-600"
    />

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email Address"
      className="w-full border rounded-lg pl-11 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-950"
      disabled={loading}
    />
  </div>

  {/* Password */}
  <div className="relative">
    <LockKeyhole 
      size={22}
      className="absolute left-4 top-5 -translate-y-1/2 text-gray-600"
    />

    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Password"
      className="w-full border rounded-lg pl-11 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-950"
      disabled={loading}
    />
  </div>

</div>

   {/* Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">

  
  <div className="relative">
    <House 
      size={22}
      className="absolute left-4 top-5 -translate-y-1/2 text-gray-600"
    />

    <input
      type="text"
      name="address"
      value={formData.address}
      onChange={handleChange}    
      placeholder="Address (Flat No, Building, City)"
      className="w-full border rounded-lg pl-11 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-950"
      disabled={loading}
    />
  </div>

  {/* Confirm Password */}
  <div className="relative">
    <LockKeyhole  
      size={22}
      className="absolute left-4 top-5 -translate-y-1/2 text-gray-600"
    />

    <input
      type="password"
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleChange}
      placeholder="Confirm Password"
      className="w-full border rounded-lg pl-11 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-950"
      disabled={loading}
    />
  </div>


</div>
              {/* Login Button */}
              <button  type="submit"
               className="w-full bg-blue-950 hover:bg-blue-900 transition rounded-lg py-2.5 text-white font-semibold flex justify-center items-center gap-2">

                <UserRoundPlus  size={24} />

                Register

              </button>

              {/* Footer */}
              <div className="flex justify-center items-center gap-2 text-gray-500 text-sm mt-5">

                <ShieldCheck strokeWidth={1.75}  size={16} />

                <span>Your information is secure and encrypted</span>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Register;