import { Megaphone, MoveRight } from "lucide-react";

const Notices = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 w-85 h-[320px]">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold text-gray-800">
          Latest Notices
        </h2>

        <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium">
          View All
          <MoveRight size={16} />
        </button>
      </div>

      {/* Notice 1 */}
      <div className="flex gap-3 p-3 bg-green-50 rounded-lg mb-3">
        <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
          <Megaphone className="text-green-700" size={20} />
        </div>

        <div>
          <h3 className="font-semibold text-sm">
            Water Supply Maintenance
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            18 May • 10:00 AM - 2:00 PM
          </p>
        </div>
      </div>

      {/* Notice 2 */}
      <div className="flex gap-3 p-3 bg-blue-50 rounded-lg mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
          <Megaphone className="text-blue-700" size={20} />
        </div>

        <div>
          <h3 className="font-semibold text-sm">
            Society Meeting
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            20 May • 6:00 PM • Club House
          </p>
        </div>
      </div>

      {/* Notice 3 */}
      <div className="flex gap-3 p-3 bg-yellow-50 rounded-lg">
        <div className="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center">
          <Megaphone className="text-yellow-700" size={20} />
        </div>

        <div>
          <h3 className="font-semibold text-sm">
            Parking Rules Update
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            New visitor parking guidelines.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Notices;