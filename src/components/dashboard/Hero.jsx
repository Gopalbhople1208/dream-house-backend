import { Hotel, Phone, ChevronLeft, ChevronRight } from "lucide-react";

const DashboardHero = ({ images, currentImage, prevImage, nextImage }) => (
  <section className="relative">
    <img
      src={images[currentImage]}
      alt="Dream House Society"
      className="w-full h-[400px] md:h-[500px] lg:h-[650px] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/50 to-transparent" />

    <div className="absolute inset-0 flex items-center">
      <div className="px-6 md:px-12 lg:px-20 max-w-3xl text-white">
        <p className="text-sm md:text-lg text-yellow-400 mb-2">Welcome To</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Dream <span className="text-yellow-400">House</span>
          <br />
          Society
        </h1>
        <div className="w-20 md:w-32 h-1 bg-yellow-400 mt-4 md:mt-6" />
        <p className="mt-4 text-sm md:text-lg text-gray-200">
          A community built on trust, security and happiness.
        </p>
        <h3 className="mt-2 text-lg md:text-2xl font-semibold">
          Better Living, Better Community
        </h3>

        <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition">
            <Hotel size={18} />
            Explore Amenities
          </button>

          <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition">
            <Phone size={18} />
            Contact Us
          </button>
        </div>
      </div>
    </div>

    <button
      className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full border border-white hover:bg-white/30 transition"
      onClick={prevImage}
    >
      <ChevronLeft color="#fff" size={20} />
    </button>

    <button
      className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full border border-white hover:bg-white/30 transition"
      onClick={nextImage}
    >
      <ChevronRight color="#fff" size={20} />
    </button>
  </section>
);

export default DashboardHero;
