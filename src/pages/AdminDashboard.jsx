
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

//           <button className="flex items-center gap-2 w-full p-3 rounded-lg hover:shadow-lg">
//             <User size={20}/>
//             Residents
//           </button>

//          <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <University  size={20}/>
//             Flats Management
//           </button>

//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <CircleAlert size={20}/>
//             Complaints Management
//           </button>

//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <Users size={20}/>
//             Staff Management
//           </button>

//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <IndianRupee size={20}/>
//             Maintenance
//           </button>


//             <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <CalendarDays size={20}/>
//             Amenities Management
//           </button>



//            <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <Users size={20}/>
//             Community
//           </button>


//            <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <Bell size={20}/>
//             Notices Management
//           </button>


//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <ShieldQuestionMark  size={20}/>
//             Visitor Management
//           </button>

         

//           <button className="flex items-center gap-2 w-full p-3 hover:shadow-lg rounded-lg">
//             <Calendar size={20}/>
//             Events Management
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

//     {/* Icon */}
//     <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//       <Users className="text-blue-600" size={24} />
//     </div>

//     {/* Text */}
//     <div className="text-right">
//       <p className="text-gray-500 text-sm font-medium">
//         Total Residents
//       </p>

//       <h2 className="text-3xl font-bold  text-blue-800 mt-2">
//         2,500
        
//       </h2>

     

//       <button className="flex items-center justify-end gap-2 text-sm text-blue-600 font-semibold mt-8 ml-auto hover:text-blue-800">
//         View All Residents
//         <MoveRight size={18} className="mt-1"/>
//       </button>
//     </div>

//   </div>

// </div>

//            <div className="bg-white rounded-xl shadow-lg p-6 ">

//   <div className="flex justify-between items-start">

//     <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//       <IndianRupee  className="text-green-600" size={24} />
//     </div>

//     <div className="text-right">
  
//       <p className="text-gray-500 text-sm font-medium">
//         Monthly Revenue
//       </p>

//       <h2 className="text-3xl font-bold text-green-600 mt-2">
//         ₹12,50,500
//       </h2>

      


//       <p className="flex items-center justify-end gap-2 text-sm text-blue-600 font-semibold mt-4 ml-auto cursor-pointer hover:text-blue-800">
//          View Financial Report
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
//         Pending Complaints
//       </p>

//       <h2 className="text-3xl font-bold mt-2">
//         15
//       </h2>

      


//       <p className="flex items-center justify-end gap-2 text-sm text-blue-600 font-semibold mt-8 ml-auto cursor-pointer hover:text-blue-800">
//   View Complaints
//   <MoveRight size={18} className="mt-1"/>
// </p>
//     </div>

  

//   </div>

// </div>

//            <div className="bg-white rounded-xl shadow-lg p-6 ">

//   <div className="flex justify-between items-start">
// <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
//       <House  className="text-cyan-600" size={24} />
//     </div>
//     <div className="text-right">
//       <p className="text-gray-500 text-sm font-medium">
//         Occupied Flats
//       </p>

//       <h2 className="text-3xl font-bold mt-2">
//         220
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

//           {/* Bottom Section */}
//           <div className="grid grid-cols-3 gap-6 mt-8">

//             <div className="bg-white font-bold text-xl h-80 rounded-xl shadow p-5">
//               Quick Actions
//                <div className="grid grid-cols-3 gap-6 mt-6">
//                 <div className="bg-green-100 rounded-xl flex flex-col justify-center items-center h-24 gap-2">

//                               <div className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center text-white">
//                             <Users  size="26"/>
//                                        </div>

//                                  <p className=" text-xs">
//                                                Add Resident
//                                                    </p>

//                                               </div>
                    
                  
                
//                                 <div className="bg-rose-100 rounded-xl flex flex-col justify-center items-center h-24 gap-2">

//                                       <div className="w-12 h-12 rounded-full bg-rose-500 flex justify-center items-center text-white">
//     <Building   size="26"/>
//   </div>

//   <p className=" text-xs">
//     Add Flat
//   </p>

// </div>
//            <div className="bg-purple-100 rounded-xl flex flex-col justify-center items-center h-24 gap-2">

//   <div className="w-12 h-12 rounded-full bg-purple-500 flex justify-center items-center text-white">
//     <UserRoundPlus   size="26"/>
//   </div>

//   <p className=" text-xs">
//     Add Staff
//   </p>

// </div>
                
//                </div>
//                <div className="grid grid-cols-3 gap-6 mt-8">
                
//                <div className="bg-blue-100 rounded-xl flex flex-col justify-center items-center h-24 gap-2">

//   <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center text-white">
//     <FileText   size="26"/>
//   </div>

//   <p className=" text-xs">
//     create Bill
//   </p>

// </div>
//                                 <div className="bg-yellow-100 rounded-xl flex flex-col justify-center items-center h-24 gap-2">

//   <div className="w-12 h-12 rounded-full bg-yellow-500 flex justify-center items-center text-white">
//     <Megaphone  size="26"/>
//   </div>

//   <p className=" text-xs ">
//     Raise Notices
//   </p>

// </div>
// <div className="bg-red-100 rounded-xl flex flex-col justify-center items-center h-24 gap-2">

//   <div className="w-12 h-12 rounded-full bg-red-500 flex justify-center items-center text-white">
//     <ChartNoAxesColumnIncreasing size="26"/>
//   </div>

//   <p className="text-xs ">
//     View Reports
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
//       Complaint Overview
//     </h2>

//     <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
//       View All
//     </button>
//   </div>
//   <div className="flex items-center gap-4 mt-3">

  

//   <div className=" flex justify-between item-center w-full">
   
  
  

//   </div>


// </div>

//   </div>

// <div className="bg-white ml-96 h-63 w-[580px] shadow rounded-xl p-5">

//   {/* Header */}
//   <div className="flex justify-between items-center mb-4">
//     <h2 className="text-lg font-bold text-gray-800">
//       monthly Maintenance Overview
//     </h2>

//     <button className="text-blue-600 font-medium hover:text-blue-800">
//       View All
//     </button>
//   </div>

  

   

    

  

// </div>
// </div>
// </div>

//         </div>

//       </main>

//     </div>
//   );
// };

// export default AdminDashboard;



import Sidebar from "../components/admin/Sidebar";
import Navbar from "../components/admin/Navbar";
import SummaryCards from "../components/admin/SummaryCards";
import QuickActions from "../components/admin/QuickActions";
import Visitors from "../components/admin/Visitors";
import Events from "../components/admin/Events";
import Notices from "../components/admin/Notices";
import ComplaintOverview from "../components/admin/ComplaintOverview";
import MaintenanceOverview from "../components/admin/MaintenanceOverview";

const AdminDashboard = () => {
  return (
    <div className="flex bg-gray-100  min-h-screen">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">

        <Navbar />

        <div className="p-5 space-y-6">

          <SummaryCards />

          <div className="grid lg:grid-cols-3 gap-6">

            <QuickActions />

            <Visitors />

            <Events />

          </div>

          <div className="grid lg:grid-cols-3 gap-6">

            <Notices />

            <ComplaintOverview />

            <MaintenanceOverview />

          </div>

        </div>

      </main>

    </div>
  );
};

export default AdminDashboard;