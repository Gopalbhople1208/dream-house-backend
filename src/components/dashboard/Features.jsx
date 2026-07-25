import { Shield, Settings, Leaf } from "lucide-react";
import { RiBuildingLine } from "react-icons/ri";
import { HandCoins, UsersRound } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "24×7 Security",
    description: "Advanced CCTV surveillance and trained security personnel.",
  },
  {
    icon: HandCoins,
    title: "Online Payments",
    description: "Pay maintenance bills and book services online.",
  },
  {
    icon: UsersRound,
    title: "Community Living",
    description: "A friendly community that celebrates togetherness.",
  },
  {
    icon: Settings,
    title: "Easy Management",
    description: "Smart management system for daily society operations.",
  },
  {
    icon: Leaf,
    title: "Green Environment",
    description: "Eco-friendly surroundings with landscaped gardens.",
  },
  {
    icon: RiBuildingLine,
    title: "Modern Amenities",
    description: "Gym, clubhouse, swimming pool, gardens and more.",
  },
];

const DashboardFeatures = () => (
  <div className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <div
            key={feature.title}
            className="bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
              <Icon color={feature.icon === RiBuildingLine ? "#D4A017" : "#978aff"} size={28} />
            </div>
            <h3 className="mt-4 font-semibold text-gray-800">{feature.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default DashboardFeatures;
