import { motion } from "framer-motion";

const Footer = () => {

  const links = [
    { name: "Home", link: "#" },
    { name: "Services", link: "#" },
    { name: "Projects", link: "#" },
    { name: "About", link: "#" },
    { name: "Contact", link: "#" },
  ];

  const socials = [
    { name: "Facebook", link: "#" },
    { name: "Twitter", link: "#" },
    { name: "LinkedIn", link: "#" },
    { name: "GitHub", link: "#" },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Logo + About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Khaled
          </h2>

          <p className="text-gray-400">
            I build modern and responsive websites using React and
            Tailwind CSS with smooth animations and clean design.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">

            {links.map((item, index) => (

              <li key={index}>
                <a
                  href={item.link}
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  {item.name}
                </a>
              </li>

            ))}

          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4">
            Follow Me
          </h3>

          <div className="flex gap-4">

            {socials.map((item, index) => (

              <a
                key={index}
                href={item.link}
                className="px-4 py-2 bg-gray-800 rounded hover:bg-yellow-400 hover:text-black transition"
              >
                {item.name}
              </a>

            ))}

          </div>

        </motion.div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Khaled. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;