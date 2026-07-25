const Events = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 h-[320px]">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold text-gray-800">
          Upcoming Events
        </h2>

        <button className="text-blue-600 font-medium hover:text-blue-800">
          View All
        </button>
      </div>

      {/* Event 1 */}
      <div className="flex items-center gap-4 mb-5">

        <div className="w-16 h-16 rounded-2xl bg-gray-100 flex flex-col items-center justify-center">
          <span className="text-xl font-bold">24</span>
          <span className="text-xs text-gray-600">May</span>
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            Society Meeting
          </h3>

          <p className="text-sm text-gray-500">
            24 May 2026 • 10:00 AM
          </p>

          <p className="text-sm text-gray-500">
            Club House
          </p>
        </div>

      </div>

      {/* Event 2 */}
      <div className="flex items-center gap-4 mb-5">

        <div className="w-16 h-16 rounded-2xl bg-gray-100 flex flex-col items-center justify-center">
          <span className="text-xl font-bold">02</span>
          <span className="text-xs text-gray-600">Jun</span>
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            Tree Plantation Drive
          </h3>

          <p className="text-sm text-gray-500">
            02 June 2026 • 08:00 AM
          </p>

          <p className="text-sm text-gray-500">
            Society Garden
          </p>
        </div>

      </div>

      {/* Event 3 */}
      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-2xl bg-gray-100 flex flex-col items-center justify-center">
          <span className="text-xl font-bold">16</span>
          <span className="text-xs text-gray-600">Jul</span>
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            Family Fun Day
          </h3>

          <p className="text-sm text-gray-500">
            16 July 2026 • 08:00 PM
          </p>

          <p className="text-sm text-gray-500">
            Club House
          </p>
        </div>

      </div>

    </div>
  );
};

export default Events;