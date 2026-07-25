// import react from 'React';
// import {UserRoundPlus} from "lucide-react"


// const ResidentDashboard = () => {
//   return (
//     <>
//     <div className="w-screen h-16 bg-amber-950">  

//     <div className=" h-60  bg-blue-300">

// <div className="w-screen h-80 bg-pink-500">

// <div className="w-screen h-52 bg-fuchsia-400">

//      <div className="w-screen h-22 bg-red-400">








        
//       <div className="w-screen h-9 bg-emerald-400">






       
// <div className="w-60 h-screen bg-cyan-400">




// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>

      
      
//     </>
//   );
// };

// export default ResidentDashboard;

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
//   Package ,
//   Megaphone ,
//   Menu,
// } from "lucide-react";
// import Logo from "../assets/logo house.png";
// import Banquent from "../assets/banquet.png";
// import Tennis from "../assets/tennis.png";
// import Swimming from "../assets/pool.png";
// import react from 'react';

// const ResidentDashboard = () => {
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

//           <button className="flex items-center gap-2 w-full p-3 rounded-lg hover:shadow-lg">
//             <User size={20}/>
//             My Profile
//           </button>

        

//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <CircleAlert size={20}/>
//             Complaints
//           </button>

//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <Users size={20}/>
//             Visitors
//           </button>

//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <IndianRupee size={20}/>
//             Maintenance
//           </button>


//             <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <CalendarDays size={20}/>
//             Amenities Booking
//           </button>



//            <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <Users size={20}/>
//             Society Community
//           </button>


//            <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <Bell size={20}/>
//             Notices
//           </button>


//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <ShoppingCart size={20}/>
//             Marketplace
//           </button>

//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <FileText size={20}/>
//             Documents
//           </button>

//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <Calendar size={20}/>
//             Events
//           </button>


//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <CircleQuestionMark  size={20}/>
//             Help & Support
//           </button>


//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
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
//             Welcome Back, UserName👋
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

//     {/* Icon */}
//     <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//       <FileXCorner className="text-blue-600" size={24} />
//     </div>

//     {/* Text */}
//     <div className="text-right">
//       <p className="text-gray-500 text-sm font-medium">
//         Total Due
//       </p>

//       <h2 className="text-3xl font-bold text-blue-800 mt-2">
//         ₹2,500
//       </h2>

//       <p className="text-xs text-gray-400 mt-1">
//         Due on 15 July 2026
//       </p>

//       <button className="flex items-center justify-end gap-2 text-sm text-blue-600 font-semibold mt-3 ml-auto hover:text-blue-800">
//         Pay Now
//         <MoveRight size={18} className="mt-1"/>
//       </button>
//     </div>

//   </div>

// </div>

//            <div className="bg-white rounded-xl shadow-lg p-6 ">

//   <div className="flex justify-between items-start">

//     <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//       <FileCheckCorner  className="text-green-600" size={24} />
//     </div>

//     <div className="text-right">
  
//       <p className="text-gray-500 text-sm font-medium">
//         Upcoming Payments
//       </p>

//       <h2 className="text-3xl font-bold text-green-600 mt-2">
//         ₹2,500
//       </h2>

//       <p className="text-xs text-gray-400 mt-1">
//         Due on 15 Aug 2026
//       </p>


//       <p className="flex items-center justify-end gap-2 text-sm text-blue-600 font-semibold mt-3 ml-auto cursor-pointer hover:text-blue-800">
//          View Details
//      <MoveRight size={18} className="mt-1"/>
//         </p>
//     </div>

  

//   </div>

// </div>
// <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">

//   <div className="flex justify-between items-start">
//     <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
//       <TriangleAlert  className="text-amber-600" size={24} />
//     </div>


//     <div className="text-right">
//       <p className="text-gray-500 text-sm font-medium">
//         Active Complaints
//       </p>

//       <h2 className="text-3xl font-bold mt-2">
//         2
//       </h2>

      


//       <p className="flex items-center justify-end gap-2 text-sm text-blue-600 font-semibold mt-3 ml-auto cursor-pointer hover:text-blue-800">
//   View Details
//   <MoveRight size={18} className="mt-1"/>
// </p>
//     </div>

  

//   </div>

// </div>

//            <div className="bg-white rounded-xl shadow-lg p-6 ">

//   <div className="flex justify-between items-start">
// <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
//       <CalendarDays  className="text-cyan-600" size={24} />
//     </div>
//     <div className="text-right">
//       <p className="text-gray-500 text-sm font-medium">
//         Amenities Bookings
//       </p>

//       <h2 className="text-3xl font-bold mt-2">
//         2
//       </h2>

      


//       <p className="flex items-center justify-end gap-2 text-sm text-blue-600 font-semibold mt-3 ml-auto cursor-pointer hover:text-blue-800">
//   View Details
//   <MoveRight size={18} className="mt-1"/>
// </p>
//     </div>

  

//   </div>

// </div>



// <div className="bg-white rounded-xl shadow-lg p-6 ">

//   <div className="flex justify-between items-start">
// <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
//       <Users  className="text-purple-600" size={24} />
//     </div>
//     <div className="text-right">
//       <p className="text-gray-500 text-sm font-medium">
//         Visitors Today
//       </p>

//       <h2 className="text-3xl font-bold mt-2">
//         2
//       </h2>

      


//       <p className="flex items-center justify-end gap-2 text-sm text-blue-600 font-semibold mt-3 ml-auto cursor-pointer hover:text-blue-800">
//   View Details
//   <MoveRight size={18} className="mt-1"/>
// </p>
//     </div>

  

//   </div>

// </div>

//           </div>

//           {/* Bottom Section */}
//           <div className="grid grid-cols-3 gap-6 mt-8">

//             <div className="bg-white font-bold text-xl h-80 rounded-xl shadow p-5">
//               Quick Actions
//                <div className="grid grid-cols-3 gap-6 mt-6">
//                 <div className="bg-green-100 rounded-xl flex flex-col justify-center items-center h-24 gap-2">

//                               <div className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center text-white">
//                             <IndianRupee  size="26"/>
//                                        </div>

//                                  <p className=" text-xs">
//                                                Pay Maintenance
//                                                    </p>

//                                               </div>
                    
                  
                
//                                 <div className="bg-rose-100 rounded-xl flex flex-col justify-center items-center h-24 gap-2">

//                                       <div className="w-12 h-12 rounded-full bg-rose-500 flex justify-center items-center text-white">
//     <CircleAlert  size="26"/>
//   </div>

//   <p className=" text-xs">
//     Raise Complaint
//   </p>

// </div>
//            <div className="bg-purple-100 rounded-xl flex flex-col justify-center items-center h-24 gap-2">

//   <div className="w-12 h-12 rounded-full bg-purple-500 flex justify-center items-center text-white">
//     <CalendarDays  size="26"/>
//   </div>

//   <p className=" text-xs">
//     Book Amenity
//   </p>

// </div>
                
//                </div>
//                <div className="grid grid-cols-3 gap-6 mt-8">
                
//                <div className="bg-blue-100 rounded-xl flex flex-col justify-center items-center h-24 gap-2">

//   <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center text-white">
//     <UserPlus  size="26"/>
//   </div>

//   <p className=" text-xs">
//     Invite Visitor
//   </p>

// </div>
//                                 <div className="bg-yellow-100 rounded-xl flex flex-col justify-center items-center h-24 gap-2">

//   <div className="w-12 h-12 rounded-full bg-yellow-500 flex justify-center items-center text-white">
//     <Bell  size="26"/>
//   </div>

//   <p className=" text-xs ">
//     Notices
//   </p>

// </div>
// <div className="bg-red-100 rounded-xl flex flex-col justify-center items-center h-24 gap-2">

//   <div className="w-12 h-12 rounded-full bg-red-500 flex justify-center items-center text-white">
//     🆘
//   </div>

//   <p className="text-xs ">
//     SOS/Emergency
//   </p>

// </div>                
//                </div>
//             </div>

//            <div className="bg-white h-80 rounded-xl  shadow p-5">

//   <div className="flex justify-between  items-center">

//     <h2 className="text-xl font-bold text-gray-800">
//       My Visitors
//     </h2>

//     <button className="text-blue-600 font-medium hover:text-blue-800">
//       View All
//     </button>

//   </div>
//   <div className="flex items-center gap-4 mt-5">

//   <div className="h-14 w-14 rounded-full bg-purple-100 flex items-center justify-center">
//     <img src="https://gravatar.com/images/homepage/avatar-02.png" alt="Visitor" className="h-full w-full rounded-full object-cover" />
//   </div>

//   <div className=" flex justify-between item-center w-full">
//     <div>
//     <h3 className="font-semibold text-lg">Package Delivered</h3>
//     <p className="text-sm text-gray-500">2023-10-01 10:00 AM</p>
//   </div>
//   <p className="text-xs bg-green-100 p-2 text-green-500 rounded-full flex items-center font-semibold">
//     CHECKED-IN
//   </p>
//   </div>

// </div>

//   <div className="flex items-center gap-4 mt-5">

//   <div className="h-14 w-14 rounded-full bg-purple-100 flex items-center justify-center">
//     <Package className="text-purple-500" />
//   </div>

//   <div className=" flex justify-between item-center w-full">
//     <div>
//     <h3 className="font-semibold text-lg">Package Delivered</h3>
//     <p className="text-sm text-gray-500">2023-10-01 10:00 AM</p>
//   </div>
//   <p className="text-xs bg-gray-200 p-2 text-gray-500 rounded-full flex items-center font-semibold">
//     CHECKED-OUT
//   </p>
//   </div>

// </div>

// </div>
//            <div className="bg-white h-80 rounded-xl shadow p-5">

//   <div className="flex justify-between items-center">

//     <h2 className="text-xl font-bold text-gray-800">
//       Upcoming Events
//     </h2>

//     <button className="text-blue-600 font-medium hover:text-blue-800">
//       View All
//     </button>

//   </div>

//   <div className="flex items-center gap-4 mt-3">

//   <div className="h-14 w-14 rounded-2xl bg-gray-100 flex items-center justify-center">
//     <p className="font-bold text-xl">24
//       <p className="text-sm text-black-500">may</p>
//     </p>
//   </div>

//   <div className=" flex justify-between item-center w-full">
//     <div>
//     <h3 className="font-semibold text-lg">Society Meeting</h3>
//     <p className="text-sm text-gray-500">2023-05-24 10:00 AM</p>
//         <p className="text-sm text-gray-500">Club House</p>

//   </div>
 
//   </div>

// </div>

// <div className="flex items-center gap-4 mt-3">

//   <div className="h-14 w-14 rounded-2xl bg-gray-100 flex items-center justify-center">
//     <p className="font-bold text-xl">02
//       <p className="text-sm text-black-500">Jun</p>
//     </p>
//   </div>

//   <div className=" flex justify-between item-center w-full">
//     <div>
//     <h3 className="font-semibold text-lg">Tree Plantation Drive</h3>
//     <p className="text-sm text-gray-500">2023-06-02 08:00 AM</p>
//         <p className="text-sm text-gray-500">Society Garden</p>

//   </div>
 
//   </div>

// </div>
// <div className="flex items-center gap-4 mt-3">

//   <div className="h-14 w-14 rounded-2xl bg-gray-100 flex items-center justify-center">
//     <p className="font-bold text-xl">16
//       <p className="text-sm text-black-500">July</p>
//     </p>
//   </div>

//   <div className=" flex justify-between item-center w-full">
//     <div>
//     <h3 className="font-semibold text-lg">Family Fun Day</h3>
//     <p className="text-sm text-gray-500">2023-07-16 08:00 PM</p>
//         <p className="text-sm text-gray-500">Club House</p>

//   </div>
 
//   </div>

// </div>

// </div>
//             <div className="grid grid-cols-3 gap-6 ">


//               <div className="bg-white h-63 w-60 shadow rounded-xl p-5">

//   {/* Card Header */}
//   <div className="flex justify-between items-center mb-4">
//     <h2 className="text-lg font-bold text-gray-800">
//       Notices
//     </h2>

//     <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
//       View All
//     </button>
//   </div>

//   {/* Notice Card */}
//   <div className="bg-green-50 rounded-xl p-4">

//     <div className="flex gap-3">

//       {/* Icon */}
//       <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0">
//         <Megaphone className="text-green-700" size={24} />
//       </div>

//       {/* Text */}
//       <div>

//         <h3 className="font-semibold text-gray-800">
//           Water Supply Work
//         </h3>

//         <p className="text-sm text-gray-500 mt-1">
//           Water supply will be unavailable on
      
//           18 May, 10:00 AM to 2:00 PM.
//         </p>

//       </div>

//     </div>

//   </div>


// </div>

// <div className="bg-white ml-32 h-63 w-90 shadow rounded-xl p-5">

//   {/* Card Header */}
//   <div className="flex justify-between items-center mb-4">
//     <h2 className="text-lg font-bold text-gray-800">
//       Maintenance Overview
//     </h2>

//     <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
//       View All
//     </button>
//   </div>
//   <div className="flex items-center gap-4 mt-3">

  

//   <div className=" flex justify-between item-center w-full">
//     <div>
//     <h3 className="font-bold text-lg">July 2026 Maintenance</h3>
//     <p className="text-xl text-semibold">₹2,500</p>
//         <p className="text-lg text-red-500">Due Date: 2026-07-15</p>
//         <button className="bg-blue-600 text-white px-7 py-2 rounded-lg mt-5 hover:bg-blue-700">
//           Pay Now
//         </button>
//   </div>
//   <p className="text-xs bg-red-100 p-2 text-red-500 rounded-full flex items-center font-semibold">
//     UNPAID
//   </p>

//   </div>


// </div>

//   </div>

// <div className="bg-white ml-96 h-63 w-[580px] shadow rounded-xl p-5">

//   {/* Header */}
//   <div className="flex justify-between items-center mb-4">
//     <h2 className="text-lg font-bold text-gray-800">
//       Book Amenity
//     </h2>

//     <button className="text-blue-600 font-medium hover:text-blue-800">
//       View All
//     </button>
//   </div>

//   {/* Amenities */}
//   <div className="grid grid-cols-3 gap-5">

//     {/* Swimming */}
//     <div className="rounded-xl  overflow-hidden shadow hover:shadow-lg transition cursor-pointer">

//       <img
//         src={Swimming}
//         alt="Swimming Pool"
//         className="w-full h-28 object-cover"
//       />

//       <div className="p-3">
//         <h3 className="font-semibold text-gray-800">
//           Swimming Pool
//         </h3>

//         <p className="text-sm text-gray-500">
//           ₹200 / hour
//         </p>

       
//       </div>

//     </div>

//     {/* Tennis */}
//     <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer">

//       <img
//         src={Tennis}
//         alt="Tennis Court"
//         className="w-full h-28 object-cover"
//       />

//       <div className="p-3">
//         <h3 className="font-semibold text-gray-800">
//           Tennis Court
//         </h3>

//         <p className="text-sm text-gray-500">
//           ₹150 / hour
//         </p>

       
//       </div>

//     </div>

//     {/* Banquet */}
//     <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer">

//       <img
//         src={Banquent}
//         alt="Banquet Hall"
//         className="w-full h-28 object-cover"
//       />

//       <div className="p-3">
//         <h3 className="font-semibold text-gray-800">
//           Banquet Hall
//         </h3>

//         <p className="text-sm text-gray-500">
//           ₹1000 / hour
//         </p>

       
//       </div>

//     </div>

//   </div>

// </div>
// </div>
// </div>

//         </div>

//       </main>

//     </div>
//   );
// };

// export default ResidentDashboard;












import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import SummaryCards from "../components/SummaryCards.jsx";
import QuickActions from "../components/QuickActions.jsx";
import Visitors from "../components/Visitors.jsx";
import Events from "../components/Events.jsx";
import Notices from "../components/Notices.jsx";
import Maintenance from "../components/Maintenance.jsx";
import Amenities from "../components/Amenities.jsx";

const ResidentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">

        {/* Navbar */}
        <Navbar setSidebarOpen={setSidebarOpen} />

        {/* Dashboard */}
        <main className="p-4 md:p-6 space-y-6">

          {/* Summary Cards */}
          <SummaryCards />

          {/* Quick Actions + Visitors + Events */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            <QuickActions />

            <Visitors />

            <Events />

          </div>

          {/* Notices + Maintenance */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            <Notices />

            <div className="xl:col-span-2">
              <Maintenance />
            </div>

          </div>

          {/* Amenities */}
          <Amenities />

        </main>

      </div>

    </div>
  );
};

export default ResidentDashboard;