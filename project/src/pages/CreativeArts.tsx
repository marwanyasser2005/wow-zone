import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Palette, Sparkles, Brush, Projector, Globe, Star } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import PageHero from "../components/PageHero";

const CreativeArts = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const gallery = [
    {
      type: "gif",
      src: "https://i.ibb.co/bgq9rSBk/ar-gif-2-1-1024x439.gif",
      title: "AR Experiences",
      description: "Interactive augmented reality installations"
    },
    {
      type: "gif",
      src: "https://i.ibb.co/Jj0qyBhk/image33.gif",
      title: "Interactive Art",
      description: "Dynamic digital art that responds to movement"
    },
    {
      type: "image",
      src: "https://i.ibb.co/LDp8mWbB/Copy-of-Whats-App-Image-2022-10-25-at-17-50-41-1024x634.jpg",
      title: "Creative Spaces",
      description: "Immersive environments for artistic expression"
    },
    {
      type: "image",
      src: "https://i.ibb.co/LXJtfWbW/interactive-el.jpg",
      title: "Interactive Elements",
      description: "Engaging digital installations"
    },
    {
      type: "image",
      src: "https://i.ibb.co/0jTZZmLL/Screenshot-2024-11-21-202830-768x427.png",
      title: "Digital Canvas",
      description: "Where technology meets artistic vision"
    },
    {
      type: "image",
      src: "https://i.ibb.co/HfpnkbxW/image81.gif",
      title: "Immersive Experiences",
      description: "Blending physical and digital realms"
    }
  ];

  const features = [
    {
      icon: <Palette className="w-10 h-10 text-purple-500" />,
      title: "Live Performances",
      description: "Experience art like never before with our interactive performances that blend creativity with technology. Watch as stunning visuals respond to movement, sound, and touch, making you part of the art itself. Perfect for those seeking a unique and immersive show where the audience and artistry connect in real time!",
      media: "https://i.ibb.co/RkcZYhf5/Video-Capture-20240726-193841.jpg"
    },
    {
      icon: <Sparkles className="w-10 h-10 text-blue-400" />,
      title: "Immersive Interactive Storytelling",
      description: "You are an Explorer! Get ready to travel to a historical myth, watch a small show, look for clues hidden in an invisible augmented reality dimension, interact at a distance with an immersive story and take amazing photos before coming back to our earthly time space reality.",
      media: "https://i.ibb.co/TBXxznkQ/m1-ll-768x359.jpg"
    },
    {
      icon: <Projector className="w-10 h-10 text-green-400" />,
      title: "Creative Immersive Environments",
      description: "Our immersive environments are designed to transport you into new worlds with captivating visuals, sounds, and interactivity. Lose yourself in spaces that respond and change, making every visit a unique experience.",
      media: "https://i.ibb.co/C5BG3ggV/20221004-182316-768x359.jpg"
    },
    {
      icon: <Brush className="w-10 h-10 text-pink-400" />,
      title: "Creative Arts-Tech Education",
      description: "Learning Through Creativity and Fun! Our educational programs blend entertainment with learning, sparking curiosity and engagement. Whether through interactive workshops, immersive experiences, or creative classes, every session is designed to enrich and inspire.",
      media: "https://i.ibb.co/LDcNRcxD/GEM-WORKSHOP-4-768x432.gif"
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="absolute inset-0"
        >
          {gallery.map((item, index) => (
            <SwiperSlide key={index}>
              {item.type === "gif" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              WOW Zone – Creative Arts
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Your Portal to Inspiring Creative Shared Experiences
            </motion.p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unleashing Creativity Through Immersive Art and Experiences
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Dive into a world where art, technology, and storytelling converge. From interactive installations to live performances and experiential activations, our creative arts offerings redefine engagement, education, and inspiration.
            </p>
            <div className="video-container mb-8">
              <iframe
                src="https://www.youtube.com/embed/ZsA4xnX-zek?controls=1&rel=0&playsinline=0&modestbranding=1&autoplay=0"
                title="Creative Arts at WOW ZONE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="rounded-2xl shadow-2xl"
              ></iframe>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              With WOW Zone Creative Arts, our aim is to offer audience-centered experiences that spark imagination, foster expression, and create shared moments of discovery. Discover the transformative power of immersive storytelling and art-tech innovation. Dive into a space where art-tech spatial experiences, creative education, immersive environments come together to connect, engage, inspire and empower.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Step into a world of innovation, inspiration and co-creation. Below is a glimpse into some of the unique and immersive creative and interactive experiences our audiences like to explore, designed to connect, captivate, inspire and spark creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={feature.media}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="inline-block p-4 bg-white/10 rounded-xl mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Immersive Experiences
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-2xl"
              >
                {item.type === "gif" ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeArts;