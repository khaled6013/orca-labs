const Projects = () => {

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern portfolio website built with React and Tailwind.",
      img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d"
    },
    {
      title: "Ecommerce Website",
      desc: "Online store with modern UI design.",
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d"
    },
    {
      title: "Business Landing Page",
      desc: "High converting landing page for business.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Dashboard UI",
      desc: "Admin dashboard with modern analytics design.",
      img: "https://images.unsplash.com/photo-1551281044-8b55a1a30d5c"
    },
    {
      title: "Agency Website",
      desc: "Creative agency website with animations.",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
    },
    {
      title: "Blog Website",
      desc: "Responsive blog website with modern layout.",
      img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29"
    }
  ];

  return (
    <section className="py-24 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">My Projects</h2>
          <p className="text-gray-400 mt-4">
            Some of the websites I have built recently
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >

              <img
                src={project.img}
                alt=""
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-6">

                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {project.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;