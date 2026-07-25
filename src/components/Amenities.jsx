import Swimming from "../assets/pool.png";
import Tennis from "../assets/tennis.png";
import Banquent from "../assets/banquet.png";

const Amenities = () => {

  const amenities = [
    {
      name: "Swimming Pool",
      image: Swimming,
      price: "₹200 / hour",
    },
    {
      name: "Tennis Court",
      image: Tennis,
      price: "₹150 / hour",
    },
    {
      name: "Banquet Hall",
      image: Banquent,
      price: "₹1000 / hour",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 h-[260px]">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-lg font-bold">
          Book Amenity
        </h2>

        <button className="text-blue-600 hover:text-blue-800">
          View All
        </button>

      </div>

      <div className="grid grid-cols-3 gap-5">

        {amenities.map((item, index) => (

          <div
            key={index}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-28 object-cover"
            />

            <div className="p-3">

              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500">
                {item.price}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Amenities;