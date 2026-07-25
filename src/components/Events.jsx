const events = [
  {
    date: "24",
    month: "May",
    title: "Society Meeting",
    time: "10:00 AM",
    location: "Club House",
  },

  {
    date: "02",
    month: "Jun",
    title: "Tree Plantation",
    time: "08:00 AM",
    location: "Garden",
  },

  {
    date: "16",
    month: "Jul",
    title: "Family Fun Day",
    time: "08:00 PM",
    location: "Club House",
  },
];

const Events = () => {
  return (
    <div className="bg-white rounded-xl shadow p-5 h-full">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-xl font-bold">
          Upcoming Events
        </h2>

        <button className="text-blue-600 text-sm">
          View All
        </button>

      </div>

      <div className="space-y-5">

        {events.map((event, index) => (

          <div
            key={index}
            className="flex gap-4 items-center"
          >

            <div className="w-16 h-16 bg-gray-100 rounded-xl flex flex-col justify-center items-center">

              <span className="font-bold text-xl">
                {event.date}
              </span>

              <span className="text-xs">
                {event.month}
              </span>

            </div>

            <div>

              <h3 className="font-semibold">
                {event.title}
              </h3>

              <p className="text-sm text-gray-500">
                {event.time}
              </p>

              <p className="text-sm text-gray-500">
                {event.location}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Events;