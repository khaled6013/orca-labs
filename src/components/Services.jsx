const Services = () => {

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      desc: "Modern and fast websites built with React and modern tools."
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Clean and professional user interface design for better experience."
    },
    {
      icon: "📱",
      title: "Responsive Design",
      desc: "Your website will look perfect on mobile, tablet and desktop."
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      desc: "Optimized website for speed and better performance."
    },
    {
      icon: "🔍",
      title: "SEO Optimization",
      desc: "Improve search ranking and visibility on Google."
    },
    {
      icon: "🛠",
      title: "Website Maintenance",
      desc: "Continuous updates and support for your website."
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-gray-400 mt-4">
            We provide high quality web solutions for modern businesses
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 hover:-translate-y-2 transition duration-300 shadow-lg"
            >

              <div className="text-4xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};
export default Services;