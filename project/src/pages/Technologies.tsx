import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Glasses, Camera, Bot, Cpu, Projector, Gamepad, Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Newsletter from '../components/Newsletter';

const Technologies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techCategories = [
    {
      title: "Augmented Reality (AR)",
      description: "Blending digital content with the physical world to create interactive experiences.",
      items: [
        {
          title: "Marker based AR",
          description: "Connected to immersive projected environments",
          image: "https://i.ibb.co/gZ4Zb6vm/image82.png"
        },
        {
          title: "Body detection AR",
          description: "Integrated to our immersive entertainment activities and used into creative edutaining workshops",
          image: "https://i.ibb.co/bgq9rSBk/ar-gif-2-1-1024x439.gif"
        },
        {
          title: "Spatial AR",
          description: "Integrated to immersive gamified interactive storytelling",
          image: "https://i.ibb.co/zHLf3dkB/ar-m1-768x358-1.jpg"
        }
      ]
    },
    {
      title: "Virtual Reality (VR)",
      description: "Immersive digital environments that transport users to new worlds.",
      items: [
        {
          title: "VR Multiplayer Game – UBR",
          description: "Our special VR multiplayer free-roaming game, with various virtual maps mapped onto our physical space.",
          image: "https://i.ibb.co/XfxHrpZj/VR-IN-AND-OUT-GIF-3.gif"
        },
        {
          title: "VR Art",
          description: "Used for prototyping, creating new environments for games, immersive storytelling, live performances and edutaining workshops",
          image: "https://i.ibb.co/F4J0jDpb/1121-1-1-768x357.gif"
        },
        {
          title: "WebVR – Virtual Worlds",
          description: "Experiences in Virtual Reality headset formats and web 3.0 platforms",
          image: "https://i.ibb.co/TqnFZKQZ/Screenshot-2024-11-21-212418-2.png"
        }
      ]
    },
    {
      title: "Projection",
      description: "Dynamic visual displays that transform spaces and objects.",
      items: [
        {
          title: "Screen-based with adapted content",
          description: "Indoors, Outdoors, Facade, Objects, People",
          image: "https://i.ibb.co/PvjmsC6g/SR-games-gif.gif"
        }
      ]
    },
    {
      title: "Generative / Interactive Media Tech",
      description: "Technology that creates dynamic, responsive content in real-time.",
      items: [
        {
          title: "Generative Visuals",
          description: "Visuals changing in real time with infinite changes, powered by algorithms as well as genAI tools and frameworks, used in various set-ups for immersive entertainment and creative experiences",
          image: "https://i.ibb.co/4R6FMxq0/20241113-174549-1.gif"
        },
        {
          title: "Interactive Touch & Motion",
          description: "Remote interaction via touchscreen, hand tracking, and body detection technologies integrated into games and experiences",
          image: "https://i.ibb.co/Fkhm7vbF/touch-screen.gif"
        },
        {
          title: "Remote Connectivity & Audiovisual Interaction",
          description: "Controlling content at distance, Audio and visuals interacting in real time, introduced in gamified solutions, brand activations and immersive parties with live DJs",
          image: "https://i.ibb.co/V1fmxhG/Video-Capture-20241006-205628-e1733089111541-1024x511.jpg"
        }
      ]
    },
    {
      title: "Artificial Intelligence (AI)",
      description: "Smart systems that enhance creativity and interactivity.",
      items: [
        {
          title: "Generative AI + Real time prompts",
          description: "Real time prompts turned into live immersive video-based formats",
          image: "https://i.ibb.co/9HBTjwVN/tech-ai-2-768x432.gif"
        },
        {
          title: "Generative AI + Live Painting",
          description: "Real time prompts together with live painting turned into live immersive interactive dynamic imagery",
          image: "https://i.ibb.co/TsV5cBh/tech-ai-4-576x1024.gif"
        },
        {
          title: "Generative AI + Live Camera",
          description: "Real time prompts together with live camera input leading to transformative live imagery adapted to person's spatial position and motion",
          image: "https://i.ibb.co/4R6FMxq0/20241113-174549-1.gif"
        },
        {
          title: "3D Capture Technologies",
          description: "Photogrammetry, NeRFs, and Gaussian Splats capturing the real world via different means and converted into 3D objects",
          image: "https://i.ibb.co/X067S4R/3d-scan-3-D-selfie-hologram-volumetric-3.gif"
        }
      ]
    }
  ];

  const innovationPoints = [
    "We explore Generative AI as a creative tool for design, content generation, and storytelling.",
    "We develop new tools and products with our WOW Group, collaborating with a pool of world-class innovators in XR and AI fields.",
    "WOW Technologies serves as a catalyst for new ideas, ensuring every project is not just experiential but transformational, connecting people with technology in ways that inspire and empower."
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */
      }
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/PX9BKTw/image113.jpg')" }}>
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 drop-shadow-lg">
        WOW Technologies
      </h1>

      <h2 className="text-2xl md:text-3xl text-purple-300 mb-6 font-semibold tracking-wide drop-shadow-md">
        Your Portal to Immersive Technology
      </h2>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed drop-shadow-sm mb-8">
        Where Creativity powers Transformative Innovative Experiences. At WOW Technologies, we don't just integrate technology; we innovate with it.
      </p>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed drop-shadow-sm">
        Our Technology Pillar empowers both audiences and brands through creative applications of cutting-edge tools. By combining software, hardware, and emerging tech in novel ways, we unlock new possibilities for experiential design, immersive engagement, and next-gen experiences.
      </p>
    </motion.div>
  </div>
</section>

      {/* Innovation Points */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Transforming Experiences with Technology
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {innovationPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-purple-400">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Categories */}
      {techCategories.map((category, categoryIndex) => (
        <section key={category.title} className="py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h2>
              <p className="text-xl text-gray-300">{category.description}</p>
            </motion.div>

            <div className="mt-8">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="pb-12"
              >
                {category.items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden h-full"
                    >
                      <div className="h-64 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      ))}

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <Newsletter />
      </section>
    </div>
  );
};

export default Technologies;