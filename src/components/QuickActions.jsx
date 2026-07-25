import {
  IndianRupee,
  CircleAlert,
  CalendarDays,
  UserPlus,
  Bell,
} from "lucide-react";

const actions = [
  {
    title: "Pay Maintenance",
    icon: IndianRupee,
    bg: "bg-green-100",
    iconBg: "bg-green-500",
  },
  {
    title: "Raise Complaint",
    icon: CircleAlert,
    bg: "bg-rose-100",
    iconBg: "bg-rose-500",
  },
  {
    title: "Book Amenity",
    icon: CalendarDays,
    bg: "bg-purple-100",
    iconBg: "bg-purple-500",
  },
  {
    title: "Invite Visitor",
    icon: UserPlus,
    bg: "bg-blue-100",
    iconBg: "bg-blue-500",
  },
  {
    title: "Notices",
    icon: Bell,
    bg: "bg-yellow-100",
    iconBg: "bg-yellow-500",
  },
];

const QuickActions = () => {
  return (
    <div className="bg-white rounded-xl shadow p-5 h-full">
      <h2 className="text-xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

        {actions.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className={`${item.bg} rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition`}
            >
              <div
                className={`w-12 h-12 rounded-full ${item.iconBg} flex justify-center items-center text-white`}
              >
                <Icon size={24} />
              </div>

              <p className="text-sm font-medium text-center">
                {item.title}
              </p>
            </button>
          );
        })}

        <button className="bg-red-100 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition">
          <div className="w-12 h-12 rounded-full bg-red-500 flex justify-center items-center text-white">
            🆘
          </div>

          <p className="text-sm font-medium">
            SOS
          </p>
        </button>

      </div>
    </div>
  );
};

export default QuickActions;