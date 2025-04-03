import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Palette, Code, Projector, Users, Brain, Globe, Lightbulb, Sparkles, Zap, Gamepad, Brush, Music, Camera } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Newsletter from '../components/Newsletter';

const Studio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const heroSlides = [
    {
      image: "https://i.ibb.co/VpmSzP1B/20240920-152400-1.gif",
      title: "WOW Studio & Group",
      subtitle: "Your Portal to Crafted Visionary Concepts"
    },
    {
      image: "https://i.ibb.co/pFjZRys/VID-20240717-WA0027-1-1.gif",
      title: "Brand Activation & Marketing",
      subtitle: "Immersive Experiential Solutions"
    },
    {
      image: "https://i.ibb.co/sp7Bw75D/Untitled-video-1-1.gif",
      title: "Live Performances & Shows",
      subtitle: "Where Technology Meets Art"
    }
  ];

  const services = [
    {
      title: "Brand Activation & Marketing",
      description: "Transform product launches and brand experiences with interactive technology and creative storytelling.",
      projects: [
        {
          title: "Nestle - Nescafe Launch",
          description: "Interactive product launch combining technology and creative visuals",
          image: "https://i.ibb.co/pFjZRys/VID-20240717-WA0027-1-1.gif"
        },
        {
          title: "ABB - Yumi Robot",
          description: "Advanced robotics display creating engaging brand interactions",
          image: "https://i.ibb.co/spbj2Jzw/IMG03394.jpg"
        }
      ]
    },
    {
      title: "Place Activation & Events",
      description: "Transform spaces through innovative technologies and creative event designs.",
      projects: [
        {
          title: "Creative Summit Event",
          description: "Interactive 8m high screen controlled via tablets and body movement",
          image: "https://i.ibb.co/V1fmxhG/Video-Capture-20241006-205628-e1733089111541-1024x511.jpg"
        },
        {
          title: "MISK Art Week KSA",
          description: "Mobile projection system bringing interactive experiences to event spaces",
          image: "https://i.ibb.co/KphMRkPD/image9.png"
        }
      ]
    },
    {
      title: "Creative Arts & Storytelling",
      description: "Blend creativity, technology, and narrative for captivating experiences.",
      projects: [
        {
          title: "Immersive Art Installations",
          description: "Dynamic environments combining interactive visuals and technology",
          image: "https://i.ibb.co/4R6FMxq0/20241113-174549-1.gif"
        },
        {
          title: "Interactive Storytelling",
          description: "Augmented reality and projection mapping bringing stories to life",
          image: "https://i.ibb.co/zHLf3dkB/ar-m1-768x358-1.jpg"
        }
      ]
    },
    {
      title: "Live Performances & Shows",
      description: "Create dynamic, multisensory experiences blending art, technology, and music.",
      projects: [
        {
          title: "Augmented Dance Shows",
          description: "Interactive visuals synchronized with live performances",
          image: "https://i.ibb.co/sp7Bw75D/Untitled-video-1-1.gif"
        },
        {
          title: "Immersive Nightlife",
          description: "Real-time visual effects and projection mapping for events",
          image: "https://i.ibb.co/VpmSzP1B/20240920-152400-1.gif"
        }
      ]
    }
  ];

  const educationProjects = [
    {
      icon: <Brush className="w-10 h-10 text-purple-400" />,
      title: "Digital Art Workshops",
      description: "Interactive workshops combining traditional art with digital tools",
      image: "https://i.ibb.co/GvzrmdY0/Screenshot-2024-11-21-203443-768x485.png"
    },
    {
      icon: <Music className="w-10 h-10 text-blue-400" />,
      title: "Dance Stars Program",
      description: "Youth dance program culminating in tech-enhanced performances",
      image: "https://i.ibb.co/HTvxYMd8/game-VR-Kid-1024x478.jpg"
    },
    {
      icon: <Camera className="w-10 h-10 text-green-400" />,
      title: "Animation Workshop",
      description: "Creative storytelling and digital animation for young creators",
      image: "https://i.ibb.co/LDcNRcxD/GEM-WORKSHOP-4-768x432.gif"
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="absolute inset-0"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-5xl md:text-7xl font-bold mb-6"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-xl md:text-2xl text-gray-300"
                    >
                      {slide.subtitle}
                    </motion.p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Introduction Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">From Vision to Reality</h2>
            <p className="text-xl text-gray-300 mb-12">
              Behind the scenes, WOW Studio brings creative concepts to life. As a creative powerhouse, we design, produce, and deploy cutting-edge immersive experiences for both B2C and B2B audiences.
            </p>
            <div className="video-container mb-12">
              <iframe
                src="https://www.youtube.com/embed/4HKPgOBqz7A"
                title="WOW Studio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl shadow-2xl"
              ></iframe>
            </div>
            <p className="text-xl text-gray-300">
              Collaborating with a world-class network of 3D artists, game developers, engineers, and technologists, our studio delivers groundbreaking projects—from XR / VR games to projection mapping and virtual environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      {services.map((service, index) => (
        <section key={service.title} className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
              <p className="text-xl text-gray-300">{service.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.projects.map((project, projectIndex) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: projectIndex * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Art-Tech Education & Workshops</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our innovative educational programs that blend creativity, technology, and hands-on learning experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block p-3 bg-white/10 rounded-xl mb-4">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <Newsletter />
      </section>
    </div>
  );
};

export default Studio;