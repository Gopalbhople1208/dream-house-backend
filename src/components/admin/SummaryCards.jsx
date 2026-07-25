import {
  Users,
  IndianRupee,
  TriangleAlert,
  House,
  HousePlus,
  MoveRight,
} from "lucide-react";

const SummaryCards = () => {
  const cards = [
    {
      title: "Total Residents",
      value: "2,500",
      icon: Users,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      valueColor: "text-blue-700",
      action: "View All Residents",
    },
    {
      title: "Monthly Revenue",
      value: "₹2,50,500",
      icon: IndianRupee,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      valueColor: "text-green-600",
      action: "View Financial Report",
    },
    {
      title: "Pending Complaints",
      value: "15",
      icon: TriangleAlert,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      valueColor: "text-black",
      action: "View Complaints",
    },
    {
      title: "Occupied Flats",
      value: "220",
      icon: House,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      valueColor: "text-black",
      action: "View Details",
    },
    {
      title: "Vacant Flats",
      value: "28",
      icon: HousePlus,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      valueColor: "text-black",
      action: "View Details",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-5"
          >
            <div className="flex justify-between items-start gap-3">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${card.iconBg}`}
              >
                <Icon className={card.iconColor} size={24} />
              </div>

              <div className="flex-1 text-right">
                <p className="text-sm text-gray-500 font-medium">
                  {card.title}
                </p>

                <h2
                  className={`text-2xl xl:text-3xl font-bold mt-2 ${card.valueColor}`}
                >
                  {card.value}
                </h2>

                <button className="flex items-center justify-end gap-2 mt-6 text-sm text-blue-600 hover:text-blue-800 font-semibold ml-auto">
                  <span className="hidden xl:inline">
                    {card.action}
                  </span>

                  <span className="xl:hidden">
                    View
                  </span>

                  <MoveRight size={18} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SummaryCards;