import {
  User,
  Bell,
  CircleAlert,
  Users,
  IndianRupee,
  FileText,
  Calendar,
  CalendarDays,
  ShoppingCart,
  Settings,
  CircleQuestionMark,
  LogOut,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo house.png";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("resident");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");
    localStorage.removeItem("role");
    navigate("/");
  };

  const menuItems = [
    { icon: User, text: "My Profile" },
    { icon: CircleAlert, text: "Complaints" },
    { icon: Users, text: "Visitors" },
    { icon: IndianRupee, text: "Maintenance" },
    { icon: CalendarDays, text: "Amenities Booking" },
    { icon: Users, text: "Society Community" },
    { icon: Bell, text: "Notices" },
    { icon: ShoppingCart, text: "Marketplace" },
    { icon: FileText, text: "Documents" },
    { icon: Calendar, text: "Events" },
    { icon: CircleQuestionMark, text: "Help & Support" },
    { icon: Settings, text: "Settings" },
  ];

  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:fixed top-0 left-0 z-40
          h-screen w-64 bg-white shadow-lg
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Mobile Close */}
        <div className="lg:hidden flex justify-end p-3">
          <button onClick={() => setSidebarOpen(false)}>
            <X />
          </button>
        </div>

        <img
          src={Logo}
          alt="Dream House"
          className="h-20 w-full object-contain border-b"
        />

        <nav className="p-4 space-y-2">

          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition"
              >
                <Icon size={20} />
                {item.text}
              </button>
            );
          })}

        </nav>

        <div className="absolute bottom-5 left-0 right-0 px-5">
          <button
            onClick={handleLogout}
            className="w-full bg-blue-900 text-white py-3 rounded-lg flex justify-center items-center gap-2"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;