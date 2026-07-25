// import { useState } from "react";
// import {
//   User,
//   Users,
//   CircleAlert,
//   IndianRupee,
//   CalendarDays,
//   Calendar,
//   Bell,
//   Settings,
//   LogOut,
//   University,
//   ShieldQuestionMark,
//   Hotel,
//   Menu,
//   X,
// } from "lucide-react";

// import Logo from "../../assets/logo house.png";

// const Sidebar = ({ setPage }) => {
//   const [open, setOpen] = useState(false);

//   const menus = [
   
   
 
//   ];

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow"
//       >
//         <Menu size={24} />
//       </button>

//       {/* Overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 lg:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//         fixed lg:static
//         top-0 left-0
//         z-50
//         h-screen
//         w-64
//         bg-white
//         border-r
//         shadow-lg
//         transform
//         transition-transform
//         duration-300
//         ${open ? "translate-x-0" : "-translate-x-full"}
//         lg:translate-x-0
//         flex
//         flex-col
//       `}
//       >
//         {/* Logo */}
//         <div className="border-b relative">
//           <img
//             src={Logo}
//             alt="Logo"
//             className="w-full h-20 object-contain"
//           />

//           <button
//             onClick={() => setOpen(false)}
//             className="absolute top-4 right-4 lg:hidden"
//           >
//             <X />
//           </button>
//         </div>

//         {/* Menu */}
//         <nav className="flex-1 overflow-y-auto p-4 space-y-2">
//              {/* Total Society */}
//   <button
//     onClick={() => setPage("dashboard")}
//     className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600"
//   >
//     <University size={20} />
//     <span className="font-medium">
//       Total Society
//     </span>
//   </button>

//   {/* Add Society */}
//   <button
//     onClick={() => setPage("addSociety")}
//     className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600"
//   >
//     <Hotel size={20} />
//     <span className="font-medium">
//       Add Society
//     </span>
//   </button>


// <button
//     onClick={() => setPage("residents")}
//     className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600"
//   >
//     <User size={20} />
//     <span className="font-medium">
//     Residents
//     </span>
//   </button>



// <button
//     onClick={() => setPage("settings")}
//     className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600"
//   >
//     <Settings size={20} />
//     <span className="font-medium">
//       Settings
//     </span>
//   </button>




// <button
//     onClick={() => setPage("events")}
//     className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600"
//   >
//     <Calendar size={20} />
//     <span className="font-medium">
//       Events
//     </span>
//   </button>





// <button
//     onClick={() => setPage("visitors")}
//     className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600"
//   >
//     <ShieldQuestionMark size={20} />
//     <span className="font-medium">
//       Visitors
//     </span>
//   </button>


// <button
//     onClick={() => setPage("Notices")}
//     className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600"
//   >
//     <Bell size={20} />
//     <span className="font-medium">
//       Notices
//     </span>
//   </button>

// <button
//     onClick={() => setPage("community")}
//     className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600"
//   >
//     <Users size={20} />
//     <span className="font-medium">
//       Community
//     </span>
//   </button>


// <button
//     onClick={() => setPage("Amenities")}
//     className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600"
//   >
//     <CalendarDays size={20} />
//     <span className="font-medium">
//       Amenities
//     </span>
//   </button>


// <button
//     onClick={() => setPage("Maintenance")}
//     className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600"
//   >
//     <IndianRupee size={20} />
//     <span className="font-medium">
//       Maintenance
//     </span>
//   </button>


// <button
//     onClick={() => setPage("complaints")}
//     className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600"
//   >
//     <CircleAlert size={20} />
//     <span className="font-medium">
//       Complaints
//     </span>
//   </button>

    


// <button
//     onClick={() => setPage("staff")}
//     className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600"
//   >
//     <Users size={20} />
//     <span className="font-medium">
//       Staff Management
//     </span>
//   </button>

//  {menus.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <button
//                 key={index}
//                 className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
//               >
//                 <Icon size={20} />

//                 <span className="font-medium">
//                   {item.title}
//                 </span>
//               </button>
//             );
//           })}
//         </nav>

//         {/* Logout */}
//         <div className="p-5 border-t">
//           <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl flex justify-center items-center gap-3">
//             <LogOut size={20} />
//             Logout
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;


import { useState } from "react";
import {
  User,
  Users,
  CircleAlert,
  IndianRupee,
  CalendarDays,
  Calendar,
  Bell,
  Settings,
  LogOut,
  University,
  ShieldQuestionMark,
  Hotel,
  Menu,
  X,
} from "lucide-react";

import Logo from "../../assets/logo house.png";

const Sidebar = ({ setPage }) => {
  const [open, setOpen] = useState(false);

  const menus = [
    { title: "Total Society", page: "dashboard", icon: University },
    { title: "Add Society", page: "addSociety", icon: Hotel },
    { title: "Admins", page: "admins", icon: User },
   
    { title: "Events", page: "events", icon: Calendar },
    { title: "Visitors", page: "visitors", icon: ShieldQuestionMark },
    { title: "Notices", page: "notices", icon: Bell },
    { title: "Community", page: "community", icon: Users },
    { title: "Amenities", page: "amenities", icon: CalendarDays },
    { title: "Maintenance", page: "maintenance", icon: IndianRupee },
    { title: "Complaints", page: "complaints", icon: CircleAlert },
    { title: "Staff Management", page: "staff", icon: Users },
     { title: "Settings", page: "settings", icon: Settings },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow"
      >
        <Menu size={24} />
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-screen w-64 bg-white border-r shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 flex flex-col`}
      >
        <div className="border-b relative">
          <img
            src={Logo}
            alt="Logo"
            className="w-full h-20 object-contain"
          />

          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 lg:hidden"
          >
            <X />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto hide-scrollbar p-4 space-y-2">
          {menus.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.page}
                onClick={() => {
                  setPage(item.page);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
              >
                <Icon size={20} />
                <span className="font-medium">{item.title}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-5 border-t">
          <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl flex items-center justify-center gap-3">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;