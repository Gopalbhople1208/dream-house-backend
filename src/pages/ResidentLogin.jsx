
// import Login from "../assets/login.png";
// import Footer1 from "../assets/footer1.png";
// import Logo from "../assets/logo.png";
// import Back from "../assets/background.png"
// import {CircleUserRound ,User,Mail ,Lock,LogIn} from "lucide-react"



// const ResidentLogin =() =>{



//     return(
// <>
//           <div>
//         <div className="relative w-full h-screen ">
            
//           <img
//             src={Login}
//             alt="Login page"
//             className="w-full h-full object-cover "

            
//           />

//             <img
//             src={Logo}
//             alt="Dream House Logo"
//             className="absolute top-1 left-130 h-44"
            
//           />

// {/* <div className="absolute left-[700px] top-54 -translate-y-1/2 ">
// <h1 className="font-semibold text-5xl text-blue-950 gap-5">welcome to Dream House </h1>

// <div className="text-gray-400 ml-40 text-lg">Please login to continue</div>
// <div className="text-amber-400 h-0.5 w-15 absolute ml-55"></div>
// </div> */}


// <div className="absolute left-[550px] top-50 -translate-y-1/2 text-center">

//   <h1 className="font-semibold text-3xl text-blue-950">
//     Welcome to Dream House
//   </h1>

//   <p className="text-gray-400 text-lg ">
//     Please login to continue
//   </p>

//   <div className="bg-amber-400 h-0.5 w-20 mx-auto mt-3"></div>


// </div>
//   <div className="bg-white shadow-2xl shadow-black absolute right-20 top-62 w-[500px] h-[520px] rounded-2xl">
// <img src={Back} alt="background" className="h-25 w-full"/>
// <div className="absolute ml-58 top-13 bg-blue-950 h-15 w-15 rounded-full -translate-y-1/2 ">
// <User className="text-white" size={60} strokeWidth={1.5} />
// </div>

// <div className="font-semibold text-2xl text-blue-950 mt-1 absolute left-50">User Login

   
// </div>
// <div className=" mt-9  ml-42">
//  <div className=" font-normal text-gray-400">login to explore Properties</div>
//   <div className="font-normal text-gray-400">and manage your account</div>

// </div>
// <div className="w-[410px] relative ml-10 mt-5">
//     <Mail size={23}  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
// <input type="email" placeholder= " Enter or Phone Number" className="pl-10 w-full p-3  border rounded-lg"></input>
// </div>
// <div className="w-[410px] relative ml-10 mt-5">
//     <Lock  size={23}  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
// <input type="password" placeholder= " Enter Password" className="pl-10 w-full p-3  border rounded-lg"></input>
// </div>


// <div>
//   <div className="flex items-center ml-11 mt-4 gap-2">
    
//   <input
//     type="checkbox"
//     id="remember"
//     className="w-4 h-4 accent-blue-950 cursor-pointer"
//   />

//   <label
//     htmlFor="remember"
//     className="text-sm text-gray-600 cursor-pointer"
//   >
//     Remember Me
//   </label>
//   <div className="text-amber-500 ml-42 text-sm font-semibold">Forget Password?</div>
// </div>
// </div>

// <div className="w-[410px] relative ml-10 mt-6">
//   <LogIn strokeWidth={1.75}  size={26} className="absolute ml-40 top-1/2 -translate-y-1/2 text-white"/>
//   <button className="bg-blue-950 pl-10 w-full p-3 border rounded-lg font-bold text-white">Login</button>
//   </div>


// </div>



     
//         </div>


         
        
//       </div>
      
//     </>
//     )
// }
// export default ResidentLogin;















import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../assets/login.png";
import Logo from "../assets/logo.png";
import Back from "../assets/background.png";

import {
  User,
  Mail,
  Lock,
  LogIn,
  LockKeyhole,
} from "lucide-react";
import { residentAPI, getErrorMessage } from "../../services/api";

const ResidentLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      setError("Please enter both email and password");
      return;
    }

    try {
      setLoading(true);
      const { data } = await residentAPI.login(formData.email, formData.password);

      if (!data.success) {
        setError(data.message || "Invalid login credentials");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("resident", JSON.stringify(data.resident));
      navigate("/resident-dashboard");
    } catch (err) {
      setError(getErrorMessage(err));
      console.error("Resident login error:", err);
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
              <div className="absolute left-1/2 -bottom-7 -translate-x-1/2 w-14 h-14 bg-blue-950 rounded-full flex items-center justify-center shadow-lg">
                <User size={28} className="text-white" />
              </div>
            </div>

            <form onSubmit={handleLogin} className="px-6 pt-10 pb-5">
              <h2 className="text-2xl font-bold text-center text-blue-950">
                Resident Login
              </h2>
              <p className="text-center text-gray-500 text-sm mt-1">
                Login to explore properties
              </p>
              <p className="text-center text-gray-500 text-sm mb-5">
                and manage your account
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
                <button type="button" className="text-blue-900 hover:underline font-medium">
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-950 hover:bg-blue-900 disabled:bg-gray-400 transition rounded-lg py-2.5 text-white font-semibold flex justify-center items-center gap-2"
              >
                <LogIn size={18} />
                {loading ? "Checking..." : "Login"}
              </button>

              <div className="flex justify-center items-center gap-2 text-gray-500 text-sm mt-5">
                <LockKeyhole size={16} />
                <span>Secure Resident Access</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentLogin;