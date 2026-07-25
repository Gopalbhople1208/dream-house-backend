import { Bell, MessageCircleMore } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white shadow h-16 px-8 flex  items-center justify-between">

      <div>

        <h1 className="text-2xl font-bold">
          Welcome Back, Admin
        </h1>

        <p className="text-sm text-gray-500">
          Society Management Dashboard
        </p>

      </div>

      <div className="flex items-center gap-6">

        <button className="relative">

          <Bell
            size={22}
            className="cursor-pointer hover:text-blue-600"
          />

          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            3
          </span>

        </button>

        <button>

          <MessageCircleMore
            size={22}
            className="cursor-pointer hover:text-blue-600"
          />

        </button>

        <div className="flex items-center gap-3">

          <img
            src="https://gravatar.com/images/homepage/avatar-04.png"
            alt="Admin"
            className="w-11 h-11 rounded-full border-2 border-blue-600"
          />

          <div>

            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-sm text-gray-500">
              Society Manager
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;