const About = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="about"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 mb-6">
            I am a passionate frontend developer who loves building modern
            and responsive websites using technologies like React,
            Tailwind CSS and modern JavaScript.
          </p>

          <p className="text-gray-400 mb-6">
            My goal is to create beautiful, fast and user-friendly websites
            that help businesses grow online.
          </p>

          {/* Skills */}
          <div className="space-y-4">

            <div>
              <p className="mb-1">React</p>
              <div className="w-full bg-gray-700 h-2 rounded">
                <div className="bg-yellow-400 h-2 rounded w-[85%]"></div>
              </div>
            </div>

            <div>
              <p className="mb-1">Tailwind CSS</p>
              <div className="w-full bg-gray-700 h-2 rounded">
                <div className="bg-yellow-400 h-2 rounded w-[80%]"></div>
              </div>
            </div>

            <div>
              <p className="mb-1">JavaScript</p>
              <div className="w-full bg-gray-700 h-2 rounded">
                <div className="bg-yellow-400 h-2 rounded w-[75%]"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;