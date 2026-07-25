const Maintenance = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-bold">
          Maintenance Overview
        </h2>

        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          View All
        </button>
      </div>

      {/* Maintenance Details */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">

        {/* Left Side */}
        <div>

          <h3 className="text-xl font-bold">
            July 2026 Maintenance
          </h3>

          <p className="text-4xl font-bold text-blue-700 mt-3">
            ₹2,500
          </p>

          <p className="text-gray-500 mt-2">
            Monthly Maintenance Charges
          </p>

          <p className="text-red-500 font-semibold mt-4">
            Due Date: 15 July 2026
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Pay Now
          </button>

        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start lg:items-end gap-4">

          <span className="bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold">
            UNPAID
          </span>

          <div className="bg-gray-50 rounded-lg p-4 w-full lg:w-64">

            <div className="flex justify-between mb-3">
              <span className="text-gray-500">Bill No.</span>
              <span className="font-semibold">#MT202607</span>
            </div>

            <div className="flex justify-between mb-3">
              <span className="text-gray-500">Billing Month</span>
              <span className="font-semibold">July 2026</span>
            </div>

            <div className="flex justify-between mb-3">
              <span className="text-gray-500">Payment Mode</span>
              <span className="font-semibold">Online</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Status</span>
              <span className="text-red-600 font-semibold">
                Pending
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Maintenance;