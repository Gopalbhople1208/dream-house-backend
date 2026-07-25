import { Package } from "lucide-react";

const Visitors = () => {
  return (
    <div className="bg-white rounded-xl shadow p-5 h-full">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">
          My Visitors
        </h2>

        <button className="text-blue-600 text-sm">
          View All
        </button>
      </div>

      <div className="space-y-5">

        <div className="flex items-center gap-4">

          <img
            src="https://gravatar.com/images/homepage/avatar-02.png"
            className="w-14 h-14 rounded-full"
            alt=""
          />

          <div className="flex-1">

            <h3 className="font-semibold">
              Package Delivered
            </h3>

            <p className="text-sm text-gray-500">
              10:00 AM
            </p>

          </div>

          <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
            CHECKED-IN
          </span>

        </div>

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-purple-100 flex justify-center items-center">
            <Package className="text-purple-600" />
          </div>

          <div className="flex-1">

            <h3 className="font-semibold">
              Courier
            </h3>

            <p className="text-sm text-gray-500">
              12:45 PM
            </p>

          </div>

          <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
            CHECKED-OUT
          </span>

        </div>

      </div>

    </div>
  );
};

export default Visitors;