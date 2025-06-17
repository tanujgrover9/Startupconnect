import { motion } from "framer-motion";

// Example testimonials (you can replace with actual user data)
const testimonials = [
  {
    name: "Samantha Carter",
    role: "Founder at Startly",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Absolutely stellar service! Their team transformed our digital presence and increased our user engagement by over 50%.",
  },
  {
    name: "James Anderson",
    role: "CTO at TechWave",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Professional, innovative, and dependable. Highly recommend them for any design or development needs!",
  },
  {
    name: "Priya Mehra",
    role: "Marketing Head at Bloom",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "They understood our vision perfectly and delivered beyond expectations. We’ve seen fantastic results.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-6 rounded-xl mt-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          We’re proud to have worked with amazing businesses. Here’s what they have to say about our services.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
            <p className="text-gray-600 italic leading-relaxed">
              “{item.quote}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
