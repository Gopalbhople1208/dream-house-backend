import {
  IndianRupee,
  CircleDollarSign,
  Wallet,
  MoveRight,
} from "lucide-react";

const MaintenanceOverview = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 h-[320px] ">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">

        <h2 className="text-lg font-bold text-gray-800">
          Monthly    Overview
        </h2>

        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
          View All
          <MoveRight size={16} />
        </button>

      </div>

      {/* Overview Cards */}

      

    </div>
  );
};

export default MaintenanceOverview;