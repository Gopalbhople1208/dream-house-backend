import { Bell, Menu, MessageCircleMore } from "lucide-react";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <header className="bg-white shadow h-16 flex items-center justify-between px-4 md:px-8">

      <div className="flex items-center gap-4">

        <button
          className="lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={28} />
        </button>

        <h1 className="text-lg md:text-2xl font-bold">
          Welcome Back, User 👋
        </h1>

      </div>

      <div className="flex items-center gap-4 md:gap-6">

        <Bell className="cursor-pointer" />

        <MessageCircleMore className="cursor-pointer" />

        <img
          src="https://gravatar.com/images/homepage/avatar-04.png"
          alt=""
          className="w-10 h-10 rounded-full"
        />

      </div>
    </header>
  );
};

export default Navbar;