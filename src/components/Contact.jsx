import { motion } from "framer-motion";

const Contact = () => {

  const contactInfo = [
    {
      title: "Email",
      value: "example@email.com"
    },
    {
      title: "Phone",
      value: "+880 1234 567890"
    },
    {
      title: "Location",
      value: "Dhaka, Bangladesh"
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="text-gray-400 mt-4">
            Have a project in mind? Let's work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-6">

            {contactInfo.map((item, index) => (

              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.value}
                </p>

              </motion.div>

            ))}

          </div>

          {/* Contact Form */}
          <motion.form
            className="space-y-4"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded bg-gray-800 outline-none"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:scale-105 transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default Contact;