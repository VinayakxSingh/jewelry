import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import "../styles/explore.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2, // 👈 Add staggered delay here
      ease: "easeOut"
    }
  })
};

const Explore = () => {
  const cards = [
    { src: "./explorecards/rings.JPG", alt: "Rings", label: "Rings" },
    { src: "/explorecards/coral.JPG", alt: "Coral", label: "Coral" },
    { src: "/explorecards/earrings.JPG", alt: "Earrings", label: "Earrings" },
  ];

  return (
    <div className="exploremaincontainer">
      <h1>Explore <FaLongArrowAltRight /></h1>
      <div className="excardcontainer">
        {cards.map((card, i) => (
          <motion.div
            className="excard"
            key={card.label}
            custom={i}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -10 }}
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
          >
            <img src={card.src} alt={card.alt} />
            <h3 className="excardh3">{card.label}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
