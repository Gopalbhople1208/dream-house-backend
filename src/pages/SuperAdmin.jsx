
// import {
//   LayoutDashboard,
//   User,
//   Bell,
//   CircleAlert,
//   Users,
//   IndianRupee,
//   FileText,
//   Calendar,
//   CalendarDays,
//   ShoppingCart ,
//   Settings ,
//   CircleQuestionMark ,
//   MessageCircleMore,
//   LogOut,
//   MoveRight,
//   FileXCorner ,
//   FileCheckCorner ,
//   UserPlus,
//   FileX2,
//   TriangleAlert,
//   ChartNoAxesColumnIncreasing,
  
//   Package ,
//   House,
//   HousePlus,
//   Megaphone ,
//   University ,
//   ShieldQuestionMark ,
//   Menu,
//   Hotel,
//   UserRoundPlus ,
//   Building ,
// } from "lucide-react";
// import Logo from "../assets/logo house.png";
// import Banquent from "../assets/banquet.png";
// import Tennis from "../assets/tennis.png";
// import Swimming from "../assets/pool.png";
// import react from 'react';

// const AdminDashboard = () => {
//   return (
//     <div className="h-screen flex bg-gray-100">

//       {/* Sidebar */}
//       <aside className="w-64 bg-white text-black">

        
//           <img
//           src={Logo}
//           alt="Dream House"
//           className="h-20 w-full flex items-center justify-center text-2xl font-bold border-b"
//         />
        

//         <nav className="mt-5 space-y-2 px-3">


//  <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg hover:text-blue-600  rounded-lg">
//             <University  size={20}/>
//              Total Society 
//           </button>

//            <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg hover:text-blue-600 rounded-lg">
//             <Hotel  size={20}/>
//              Add Society 
//           </button>

//           <button className="flex items-center gap-2 w-full p-3 rounded-lg hover:text-blue-600  hover:shadow-lg">
//             <User size={20}/>
//             Residents
//           </button>

        

//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg hover:text-blue-600  rounded-lg">
//             <CircleAlert size={20}/>
//             Complaints Management
//           </button>

//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg hover:text-blue-600 rounded-lg">
//             <Users size={20}/>
//             Staff Management
//           </button>

//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg hover:text-blue-600  rounded-lg">
//             <IndianRupee size={20}/>
//             Maintenance
//           </button>


//             <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg hover:text-blue-600  rounded-lg">
//             <CalendarDays size={20}/>
//             Amenities Management
//           </button>



//            <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg hover:text-blue-600  rounded-lg">
//             <Users size={20}/>
//             Community
//           </button>


//            <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg hover:text-blue-600  rounded-lg">
//             <Bell size={20}/>
//             Notices Management
//           </button>


//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg hover:text-blue-600  rounded-lg">
//             <ShieldQuestionMark  size={20}/>
//             Visitor Management
//           </button>

         

//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg hover:text-blue-600  rounded-lg">
//             <Calendar size={20}/>
//             Events Management
//           </button>


         


//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg hover:text-blue-600  rounded-lg">
//             <Settings  size={20}/>
//             Settings
//           </button>

//         </nav>

//         <div className="absolute bottom-5 left-15">
//           <button className="flex items-center gap-3 bg-blue-900 text-white  px-7 py-3 rounded-lg">
//             <LogOut size={20}/>
//             Logout
//           </button>
//         </div>

//       </aside>

//       {/* Main Section */}
//       <main className="flex-1">

//         {/* Navbar */}
//         <header className="h-16 bg-white shadow flex items-center justify-between px-8">

//           <h1 className="text-2xl font-bold">
//             Welcome Back, Admin👋
//           </h1>

//           <div className="flex items-center gap-6">

//             <Bell className="cursor-pointer"/>
//             <MessageCircleMore className="cursor-pointer"/>

//            <img
//   src="https://gravatar.com/images/homepage/avatar-04.png"
//   alt="Profile"
//   className="w-10 h-10 rounded-full object-cover"
// />

//           </div>

//         </header>

//         {/* Dashboard Content */}
//         <div className="p-3">

//           {/* Cards */}
//           <div className="grid grid-cols-5 gap-3">

//       <div className="bg-white rounded-xl shadow-lg p-6">

//   <div className="flex items-start justify-between">

  

//   </div>

// </div>

//            <div className="bg-white rounded-xl shadow-lg p-6 ">

//   <div className="flex justify-between items-start">

    
    

  

//   </div>

// </div>
// <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">

//   <div className="flex justify-between items-start">
    
//   </div>

// </div>

//            <div className="bg-white rounded-xl shadow-lg p-6 ">

//   <div className="flex justify-between items-start">


  

//   </div>

// </div>



// <div className="bg-white rounded-xl shadow-lg p-6 ">

//   <div className="flex justify-between items-start">
// <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
//       <HousePlus   className="text-purple-600" size={24} />
//     </div>
//     <div className="text-right">
//       <p className="text-gray-500 text-sm font-medium">
//         Vaccinated Flats
//       </p>

//       <h2 className="text-3xl font-bold mt-2">
//         28
//       </h2>

      


//       <p className="flex items-center justify-end gap-2 text-sm text-blue-600 font-semibold mt-3 ml-auto cursor-pointer hover:text-blue-800">
//   View Details
//   <MoveRight size={18} className="mt-1"/>
// </p>
//     </div>

  

//   </div>

// </div>

//           </div>

        
         


 
// </div>
 

  

   

    

//    </main>

// </div>



    

     

    
//   );
// };

// export default AdminDashboard;


// import Sidebar from "../components/superadmin/Sidebar.jsx";
// import Navbar from "../components/superadmin/Navbar.jsx";

// const SuperAdmin = () => {
//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       <Sidebar />

//       <main className="flex-1 lg:ml-0">
//         <Navbar />

//         <div className="p-4 md:p-6">
//           {/* Dashboard Components */}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SuperAdmin;
import { useState } from "react";
import Sidebar from "../components/superadmin/Sidebar";
import Navbar from "../components/superadmin/Navbar";
import Dashboard from "../components/superadmin/Dashboard";
import AddSociety from "../components/superadmin/AddSociety";
import Admins from "../components/superadmin/Admins";
import Amenities from "../components/superadmin/Amenities";
import Community from "../components/superadmin/Community";
import Complaints from "../components/superadmin/Complaints";
import Events from "../components/superadmin/Events";
import Maintenance from "../components/superadmin/Maintenance";
import Notices from "../components/superadmin/Notices";
import Settings from "../components/superadmin/Settings";
import Staff from "../components/superadmin/Staff"; // ✅ Capital S
import Visitors from "../components/superadmin/Visitors";





const SuperAdmin = () => {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100">

      <Sidebar setPage={setPage} />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">

         {page === "dashboard" && <Dashboard />}
{page === "addSociety" && <AddSociety />}
{page === "admins" && <Admins />}
{page === "amenities" && <Amenities />}
{page === "community" && <Community />}
{page === "complaints" && <Complaints />}
{page === "events" && <Events />}
{page === "maintenance" && <Maintenance />}
{page === "notices" && <Notices />}
{page === "settings" && <Settings />}
{page === "staff" && <Staff />}
{page === "visitors" && <Visitors />}
 


        </div>

      </div>

    </div>
  );
};

export default SuperAdmin;