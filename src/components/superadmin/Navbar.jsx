import {
  Bell,
  MessageCircleMore,
  Search,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm h-16 flex items-center justify-between px-5 md:px-8">

      {/* Left */}
      <div>
        <h1 className="text-xl md:text-2xl font-bold">
          Welcome Back, Admin
        </h1>

        <p className="text-sm text-gray-500 hidden md:block">
          Society Management Dashboard
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-lg px-3 py-2">

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 text-sm"
          />

        </div>

        {/* Notifications */}
        <button className="relative">

          <Bell className="text-gray-700 hover:text-blue-600" />

          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        {/* Messages */}
        <button>

          <MessageCircleMore className="text-gray-700 hover:text-blue-600" />

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <img
            src="https://gravatar.com/images/homepage/avatar-04.png"
            alt="Admin"
            className="w-10 h-10 rounded-full border"
          />

          <div className="hidden md:block">

            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-xs text-gray-500">
              Super Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;