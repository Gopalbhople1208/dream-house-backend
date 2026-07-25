import { Megaphone } from "lucide-react";

const Notices = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 h-[310px]">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-bold">
          Notices
        </h2>

        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="bg-green-50 rounded-xl p-4">

        <div className="flex gap-4">

          <div className="w-12 h-12 rounded-full bg-green-200 flex justify-center items-center">
            <Megaphone className="text-green-700" size={22} />
          </div>

          <div>

            <h3 className="font-semibold">
              Water Supply Work
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Water supply will be unavailable on
              <br />
              18 May, 10:00 AM to 2:00 PM.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Notices;