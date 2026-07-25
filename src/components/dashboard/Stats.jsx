import { Building2, Users, House, Shield, TreeDeciduous } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "12",
    label: "Towers",
  },
  {
    icon: Users,
    value: "832",
    label: "Families",
  },
  {
    icon: House,
    value: "311",
    label: "Flats",
  },
  {
    icon: Shield,
    value: "24×7",
    label: "Security",
  },
  {
    icon: TreeDeciduous,
    value: "5+",
    label: "Years of Excellence",
  },
];

const DashboardStats = () => (
  <div className="bg-white py-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-blue-950 rounded-2xl p-6 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-4">
                <Icon size={50} color="#F0BB40" strokeWidth={1.25} />
                <div>
                  <h2 className="text-white text-2xl font-bold">{item.value}</h2>
                  <p className="text-gray-300 text-sm">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

export default DashboardStats;
