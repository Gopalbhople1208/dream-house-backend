import { MapPin, Building2, ShieldCog, ShieldUser } from "lucide-react";

const DashboardAbout = () => (
  <div className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-3">
          <div className="h-[2px] w-12 bg-amber-500"></div>
          <h2 className="text-3xl font-bold text-amber-500">About Dream House Society</h2>
          <div className="h-[2px] w-12 bg-amber-500"></div>
        </div>
        <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
          Creating a secure, modern and vibrant living experience where families enjoy comfort, convenience and community together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-4xl font-bold text-blue-950 leading-tight">Building Better Communities</h3>
          <p className="mt-6 text-gray-600 leading-8">
            Dream House Society is more than just a residential community. We provide a safe, secure and well-maintained environment with modern amenities, smart management services and a vibrant neighborhood culture.
          </p>
          <p className="mt-4 text-gray-600 leading-8">
            Our goal is to enhance residents' lifestyles through excellent facilities, transparent management and a strong sense of community living.
          </p>
          <button className="mt-8 bg-blue-950 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-medium transition">
            Read More
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {[
            {
              title: "Prime Location",
              Icon: MapPin,
              text: "Located in a well-connected area with easy access to schools, hospitals and shopping centers.",
            },
            {
              title: "Quality Construction",
              Icon: Building2,
              text: "Premium construction standards ensuring safety, durability and comfort.",
            },
            {
              title: "Transparency & Trust",
              Icon: ShieldCog,
              text: "Clear communication and transparent management practices for all residents.",
            },
            {
              title: "Resident Satisfaction",
              Icon: ShieldUser,
              text: "Dedicated support and services designed around resident needs.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full text-amber-500 mb-3">
                <item.Icon size={24} />
              </div>
              <h4 className="font-semibold text-blue-950">{item.title}</h4>
              <p className="text-sm text-gray-500 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DashboardAbout;
