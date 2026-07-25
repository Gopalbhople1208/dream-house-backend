import {
  FileXCorner,
  FileCheckCorner,
  TriangleAlert,
  CalendarDays,
  Users,
  MoveRight,
} from "lucide-react";

const cards = [
  {
    title: "Total Due",
    value: "₹2,500",
    color: "blue",
    icon: FileXCorner,
    button: "Pay Now",
    date: "Due on 15 July 2026",
  },
  {
    title: "Upcoming Payments",
    value: "₹2,500",
    color: "green",
    icon: FileCheckCorner,
    button: "View Details",
    date: "Due on 15 Aug 2026",
  },
  {
    title: "Active Complaints",
    value: "2",
    color: "amber",
    icon: TriangleAlert,
    button: "View Details",
  },
  {
    title: "Amenities Bookings",
    value: "2",
    color: "cyan",
    icon: CalendarDays,
    button: "View Details",
  },
  {
    title: "Visitors Today",
    value: "2",
    color: "purple",
    icon: Users,
    button: "View Details",
  },
];

const bg = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  amber: "bg-amber-100 text-amber-600",
  cyan: "bg-cyan-100 text-cyan-600",
  purple: "bg-purple-100 text-purple-600",
};

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">

      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between">

              <div
                className={`w-12 h-12 rounded-full flex justify-center items-center ${bg[card.color]}`}
              >
                <Icon size={24} />
              </div>

              <div className="text-right">

                <p className="text-gray-500 text-sm">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {card.value}
                </h2>

                {card.date && (
                  <p className="text-xs text-gray-400 mt-1">
                    {card.date}
                  </p>
                )}

                <button className="flex items-center gap-2 ml-auto mt-3 text-blue-600 text-sm font-semibold hover:text-blue-800">
                  {card.button}
                  <MoveRight size={16} />
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