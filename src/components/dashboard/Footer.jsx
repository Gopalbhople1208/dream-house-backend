import { ChevronRight, MapPin, Phone, Mail, Shield } from "lucide-react";
import { RiBuildingLine, RiLeafLine, RiLeafFill } from "react-icons/ri";
import { BiDumbbell } from "react-icons/bi";
import { WiRaindrop } from "react-icons/wi";
import footer1 from "../../assets/footer1.png";

const footerLinks = ["Privacy Policy", "Terms & Conditions", "Refund Policy"];
const quickLinks = ["Home", "About Society", "Amenities", "Gallery", "Contact Us"];
const amenities = [
  { icon: Shield, text: "24x7 Security" },
  { icon: RiBuildingLine, text: "Modern Club House" },
  { icon: WiRaindrop, text: "Swimming Pool" },
  { icon: BiDumbbell, text: "Gymnasium" },
  { icon: RiLeafLine, text: "Green Environment" },
];

const DashboardFooter = () => (
  <footer className="bg-blue-950 text-white mt-12">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={footer1} alt="Dream House" className="h-30 mb-5" />
          <p className="text-gray-300 leading-7">
            Dream House Society is more than just a place to live. It is a community designed to offer a perfect blend of comfort, convenience and luxury.
          </p>
        </div>

        <div>
          <h3 className="text-amber-400 text-xl font-bold">QUICK LINKS</h3>
          <div className="w-10 h-[2px] bg-amber-400 mt-2 mb-5" />
          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item} className="flex gap-2 items-center">
                <ChevronRight size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-amber-400 text-xl font-bold">AMENITIES</h3>
          <div className="w-10 h-[2px] bg-amber-400 mt-2 mb-5" />
          <ul className="space-y-3">
            {amenities.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.text} className="flex gap-2 items-center">
                  <Icon size={18} />
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-amber-400 text-xl font-bold">CONTACT US</h3>
          <div className="w-10 h-[2px] bg-amber-400 mt-2 mb-5" />
          <div className="space-y-4">
            <div className="flex gap-2">
              <MapPin size={18} />
              <span>Dream House Society, Green City</span>
            </div>
            <div className="flex gap-2">
              <Phone size={18} />
              <span>+91 9146206019</span>
            </div>
            <div className="flex gap-2">
              <Mail size={18} />
              <span>info@dreamhousesociety.com</span>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-amber-400 font-bold">NEWSLETTER</h4>
            <div className="flex flex-col sm:flex-row gap-2 mt-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border-white border-1 text-white outline-none"
              />
              <button className="bg-amber-500 px-4 py-2 rounded-lg hover:bg-amber-600">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Dream House Society. All Rights Reserved.</p>
        <div className="flex gap-6 flex-wrap">{footerLinks.map((link) => (<span key={link}>{link}</span>))}</div>
      </div>
    </div>
  </footer>
);

export default DashboardFooter;
