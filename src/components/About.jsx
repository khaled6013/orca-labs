import { motion } from "framer-motion";

const About = () => {

  const aboutData = {
    title: "About Me",
    description:
      "I am a passionate frontend developer who builds modern and responsive websites using React and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  };

  const skills = [
    { name: "React", percent: "85%" },
    { name: "Tailwind", percent: "80%" },
    { name: "JavaScript", percent: "75%" },
    { name: "Bootstrap", percent: "70%" },
  ];

  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image Animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={aboutData.image}
            alt=""
            className="rounded-xl shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-4xl font-bold mb-6">
            {aboutData.title}
          </h2>

          <p className="text-gray-400 mb-8">
            {aboutData.description}
          </p>

          {/* Skills */}
          <div className="space-y-5">

            {skills.map((skill, index) => (

              <motion.div
                key={index}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1 }}
              >

                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.percent}</span>
                </div>

                <div className="w-full bg-gray-700 h-2 rounded">

                  <motion.div
                    className="bg-yellow-400 h-2 rounded"
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.percent }}
                    transition={{ duration: 1.5 }}
                  ></motion.div>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default About;