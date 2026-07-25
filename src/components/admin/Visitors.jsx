import { Package } from "lucide-react";

const Visitors = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 h-[320px]">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold text-gray-800">
          My Visitors
        </h2>

        <button className="text-blue-600 font-medium hover:text-blue-800">
          View All
        </button>
      </div>

     
      {/* Visitor 3 */}

      <div className="flex items-center gap-4 py-4">

        <div className="w-14 h-14 rounded-full bg-blue-100 overflow-hidden">
          <img
            src="https://gravatar.com/images/homepage/avatar-03.png"
            alt="Visitor"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-between items-center flex-1">

          <div>

            <h3 className="font-semibold text-lg">
              Amit Verma
            </h3>

            <p className="text-sm text-gray-500">
              Guest • 04:15 PM
            </p>

            <p className="text-sm text-gray-500">
              Wing C • Flat 108
            </p>

          </div>

          <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">
            EXPECTED
          </span>

        </div>

      </div>

    </div>
  );
};

export default Visitors;