import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import PageHero from "../components/PageHero";

const About = () => {
  const sections = [
    {
      title: "Step into Wonder",
      description:
        "WOW Zone is a space where creativity, technology, and innovation merge to create immersive experiences. As Egypt’s first fully immersive experiential space, it combines digital art, gaming, and education into an interactive and evolving environment.",
      image: "https://i.ibb.co/xtMpcrv5/Nice-slides-WOW-768x432.png",
    },
    {
      title: "Beyond Reality: Our Vision",
      description:
        "WOW Zone redefines entertainment by blending digital and physical experiences. It offers an innovative approach to interaction, learning, and play through extended reality, artificial intelligence, and immersive storytelling.",
      image: "https://i.ibb.co/k2L6TkFc/Screenshot-2024-11-21-202830-768x427.png",
    },
    {
      title: "A Flexible and Transformative Space",
      description:
        "WOW Zone is designed to adapt and transform. It can function as a high-energy gaming space, a digital art exhibition, an interactive storytelling venue, or a learning hub. This modular design allows for a constantly evolving experience.",
      image: "https://i.ibb.co/jvYwq4PR/Presentation1-768x432.png",
    },
    {
      title: "Innovation through AI and Extended Reality",
      description:
        "WOW Zone integrates artificial intelligence, projection-mapped storytelling, and interactive performances. Every visit offers new and engaging experiences powered by advanced immersive technology.",
      image: "https://i.ibb.co/bgq9rSBk/ar-gif-2-1-1024x439.gif",
    },
    {
      title: "For All Generations, All Experiences",
      description:
        "WOW Zone welcomes children, teenagers, and adults. Whether visitors come to play, learn, or explore, the space adapts to provide unique and engaging experiences.",
      image: "https://i.ibb.co/9HBTjwVN/tech-ai-2-768x432.gif",
    },
    {
      title: "A Platform for Creativity and Collaboration",
      description:
        "WOW Zone provides a space for creators, artists, and technology enthusiasts to experiment with immersive storytelling and interactive content. It serves as a hub for innovation in digital entertainment and learning.",
      image: "https://i.ibb.co/4R6FMxq0/20241113-174549-1.gif",
    },
  ];

  return (
    <div>
      <PageHero
        title="About WOW Immersive"
        subtitle="A New Era of Immersive Entertainment"
        description="WOW Zone creates interactive digital worlds that redefine storytelling, learning, and entertainment."
        imageUrl="https://i.ibb.co/SXsmN7F6/image18.gif"
      />

      <main className="container mx-auto px-4 py-32">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-16 flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {section.title}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                {section.description}
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
};

export default About;
