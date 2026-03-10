import { useEffect, useState } from "react";

const Banner = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 200);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-r from-black via-gray-900 to-black text-white overflow-hidden">

      {/* floating blur circles */}
      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-40 top-10 left-10 animate-pulse"></div>

      <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-40 bottom-10 right-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* heading */}
        <h1
          className={`text-5xl md:text-7xl font-bold leading-tight transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Build Modern <span className="text-yellow-400">Web Experiences</span>
        </h1>

        {/* paragraph */}
        <p
          className={`mt-6 text-gray-300 max-w-xl mx-auto transition-all duration-1000 delay-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          We create beautiful, fast and interactive websites using modern
          technologies like React and Tailwind CSS.
        </p>

        {/* buttons */}
        <div
          className={`mt-8 flex justify-center gap-4 transition-all duration-1000 delay-500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:scale-105 transition">
            Get Started
          </button>

          <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
            View Work
          </button>
        </div>

      </div>
    </section>
  );
};

export default Banner;