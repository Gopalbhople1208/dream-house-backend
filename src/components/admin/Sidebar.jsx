// import {
//   User,
//   CircleAlert,
//   Users,
//   IndianRupee,
//   CalendarDays,
//   Bell,
//   Calendar,
//   Settings,
//   LogOut,
//   University,
//   ShieldQuestionMark,
// } from "lucide-react";

// import Logo from "../../assets/logo house.png";

// const Sidebar = () => {
//   const menus = [
//     { icon: User, title: "Residents" },
//     { icon: University, title: "Flats Management" },
//     { icon: CircleAlert, title: "Complaints " },
//     { icon: Users, title: "Staff Management" },
//     { icon: IndianRupee, title: "Maintenance" },
//     { icon: CalendarDays, title: "Amenities" },
//     { icon: Users, title: "Community" },
//     { icon: Bell, title: "Notices Management" },
//     { icon: ShieldQuestionMark, title: "Visitor Management" },
//     { icon: Calendar, title: "Events Management" },
//     { icon: Settings, title: "Settings" },
//   ];

//   return (
//     <aside className="hidden lg:flex flex-col w-64 h-screen bg-white shadow-md border-r sticky top-0">

//       <div className="border-b">
//         <img
//           src={Logo}
//           alt="Logo"
//           className="w-full h-20 object-contain"
//         />
//       </div>

//       <nav className="flex-1 overflow-y-auto p-4 space-y-2">

//         {menus.map((item, index) => {
//           const Icon = item.icon;

//           return (
//             <button
//               key={index}
//               className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
//             >
//               <Icon size={20} />
//               <span className="font-medium">{item.title}</span>
//             </button>
//           );
//         })}

//       </nav>

//       <div className="p-5 border-t">

//         <button className="w-full flex justify-center items-center gap-3 bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl transition">

//           <LogOut size={20} />

//           Logout

//         </button>

//       </div>

//     </aside>
//   );
// };

// export default Sidebar;












  import {
    User,
    CircleAlert,
    Users,
    IndianRupee,
    CalendarDays,
    Bell,
    Calendar,
    Settings,
    LogOut,
    University,
    ShieldQuestionMark,
    X,
  } from "lucide-react";
  import { useNavigate } from "react-router-dom";

  import Logo from "../../assets/logo house.png";

  const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
      const role = localStorage.getItem("role");
      localStorage.removeItem("adminToken");
      localStorage.removeItem("admin");
      localStorage.removeItem("token");
      localStorage.removeItem("resident");
      localStorage.removeItem("role");

      if (role === "admin") {
        navigate("/admin-login");
      } else {
        navigate("/");
      }
    };

    const menus = [
      { icon: User, title: "Residents" },
      { icon: University, title: "Flats Management" },
      { icon: CircleAlert, title: "Complaints" },
      { icon: Users, title: "Staff Management" },
      { icon: IndianRupee, title: "Maintenance" },
      { icon: CalendarDays, title: "Amenities" },
      { icon: Users, title: "Community" },
      { icon: Bell, title: "Notices Management" },
      { icon: ShieldQuestionMark, title: "Visitor Management" },
      { icon: Calendar, title: "Events Management" },
      { icon: Settings, title: "Settings" },
    ];

    return (
      <>
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <aside
          className={`
            fixed lg:sticky top-0 left-0 z-50
            h-screen w-64 bg-white shadow-lg border-r
            transform transition-transform duration-300
            ${
              sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
          `}
        >
          {/* Logo */}
          <div className="border-b flex justify-between items-center px-4 h-20">

            <img
              src={Logo}
              alt="Logo"
              className="h-14 object-contain"
            />

            {/* Close Button (Mobile) */}
            <button
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={24} />
            </button>

          </div>

          {/* Menu */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">

            

            {menus.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={index}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  <Icon size={20} />

                  <span className="font-medium">
                    {item.title}
                  </span>
                </button>
              );
            })}

          </nav>

          {/* Logout */}
          <div className="absolute bottom-0 w-full p-5 border-t bg-white">

            <button
            onClick={handleLogout}
            className="w-full flex justify-center items-center gap-3 bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl">

              <LogOut size={20} />

              Logout

            </button>

          </div>

        </aside>
      </>
    );
  };

  export default Sidebar;