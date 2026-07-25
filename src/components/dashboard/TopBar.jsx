import { MapPin, Mail, Phone } from "lucide-react";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterFill,
  RiWhatsappFill,
} from "react-icons/ri";

const DashboardTopBar = () => (
  <div className="bg-blue-950 text-white text-sm">
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-2">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-yellow-400 flex-shrink-0" />
            <span className="text-xs md:text-sm">
              Dream House Society, Green City, New Delhi - 110122
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} className="text-yellow-400 flex-shrink-0" />
            <span className="text-xs md:text-sm">gbhople32@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-yellow-400" />
            <span className="text-xs md:text-sm">+91 9146206019</span>
          </div>

          <div className="flex items-center gap-3">
            <RiFacebookCircleFill
              size={20}
              className="cursor-pointer hover:text-yellow-400 hover:scale-110 transition-all duration-300"
            />
            <RiInstagramFill
              size={20}
              className="cursor-pointer hover:text-yellow-400 hover:scale-110 transition-all duration-300"
            />
            <RiWhatsappFill
              size={20}
              className="cursor-pointer hover:text-yellow-400 hover:scale-110 transition-all duration-300"
            />
            <RiTwitterFill
              size={20}
              className="cursor-pointer hover:text-yellow-400 hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardTopBar;
