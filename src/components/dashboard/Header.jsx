import { Link } from "react-router-dom";
import { Menu, ShieldCheck, UserRound } from "lucide-react";
import logo from "../../assets/logo house.png";

const DashboardHeader = () => (
  <div className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
      <div>
        <img
          src={logo}
          alt="Dream House Logo"
          className="h-14 md:h-20 object-contain"
        />
      </div>

      <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">

  <li>
    <Link
      to="/"
      className="hover:text-yellow-600 transition"
    >
      HOME
    </Link>
  </li>

  <li>
    <Link
      to="/about"
      className="hover:text-yellow-600 transition"
    >
      ABOUT SOCIETY
    </Link>
  </li>

  <li>
    <Link
      to="/amenities"
      className="hover:text-yellow-600 transition"
    >
      AMENITIES
    </Link>
  </li>

  <li>
    <Link
      to="/gallery"
      className="hover:text-yellow-600 transition"
    >
      GALLERY
    </Link>
  </li>

  <li>
    <Link
      to="/contact"
      className="hover:text-yellow-600 transition"
    >
      CONTACT US
    </Link>
  </li>

</ul>

      <div className="hidden lg:flex items-center gap-4">
        <Link to="/resident-login">
          <button className="bg-blue-950 hover:bg-blue-900 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition">
            <UserRound size={18} />
            <span>RESIDENT LOGIN</span>
          </button>
        </Link>

        <Link to="/admin-login">
          <button className="bg-yellow-600 hover:bg-yellow-500 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition">
            <ShieldCheck size={18} />
            <span>ADMIN LOGIN</span>
          </button>
        </Link>
      </div>

      <button className="lg:hidden">
        <Menu size={28} />
      </button>
    </div>
  </div>
);

export default DashboardHeader;
