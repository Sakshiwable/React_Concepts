const Content = () => {
  return (
    <div className="relative px-4">
      {/* Image Wrapper */}
      <div className="relative h-[680px] w-full rounded-2xl overflow-hidden shadow-lg">
        <img
          className="h-full w-full object-cover"
          src="https://t3.ftcdn.net/jpg/01/62/06/40/360_F_162064034_HI2YEgV7km3HMy0rccQczKH2vvpI4OnB.jpg"
          alt="Real Estate"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="leading-tight font-bold text-white text-4xl md:text-5xl lg:text-6xl">
            Your Reliable Ally in <br />
            World Wide Estate
          </h1>

          <p className="mt-6 max-w-2xl text-gray-200 text-lg md:text-xl">
            Discover premium properties, trusted advisors, and homes built for
            your future.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">
              Explore Properties
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
