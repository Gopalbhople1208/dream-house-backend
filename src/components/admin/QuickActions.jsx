import {
  Users,
  Building,
  UserRoundPlus,
  FileText,
  Megaphone,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

const actions = [
  {
    title: "Add Resident",
    icon: Users,
    bg: "bg-green-100",
    iconBg: "bg-green-500",
  },
  {
    title: "Add Flat",
    icon: Building,
    bg: "bg-rose-100",
    iconBg: "bg-rose-500",
  },
  {
    title: "Add Staff",
    icon: UserRoundPlus,
    bg: "bg-purple-100",
    iconBg: "bg-purple-500",
  },
  {
    title: "Create Bill",
    icon: FileText,
    bg: "bg-blue-100",
    iconBg: "bg-blue-500",
  },
  {
    title: "Raise Notice",
    icon: Megaphone,
    bg: "bg-yellow-100",
    iconBg: "bg-yellow-500",
  },
  {
    title: "View Reports",
    icon: ChartNoAxesColumnIncreasing,
    bg: "bg-red-100",
    iconBg: "bg-red-500",
  },
];

const QuickActions = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-[320px]">

      {/* Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        Quick Actions
      </h2>

      {/* Actions */}
      <div className="grid grid-cols-3 gap-6">

        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <button
              key={index}
              className={`${action.bg} rounded-xl h-28 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition duration-300`}
            >
              <div
                className={`${action.iconBg} w-12 h-12 rounded-full flex items-center justify-center text-white`}
              >
                <Icon size={24} />
              </div>

              <p className="text-sm font-medium text-gray-700 text-center">
                {action.title}
              </p>
            </button>
          );
        })}

      </div>
    </div>
  );
};

export default QuickActions;