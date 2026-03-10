import { motion } from "framer-motion";

const Testimonials = () => {

  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, Tech Company",
      review:
        "Amazing work! The website looks modern and works perfectly on all devices.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      review:
        "Very professional developer. Delivered the project on time with great quality.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Brown",
      role: "Startup Founder",
      review:
        "Highly recommended! The design and performance of the site are excellent.",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  return (
    <section className="py-24 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Client Testimonials</h2>
          <p className="text-gray-400 mt-4">
            What people say about my work
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              className="bg-gray-900 p-8 rounded-xl shadow-lg"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >

              <p className="text-gray-400 mb-6">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  <h4 className="font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {item.role}
                  </p>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;