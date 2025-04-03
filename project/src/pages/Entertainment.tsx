import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Gamepad, Mic2, Music, Users, PartyPopper, Sparkles, Map } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Entertainment = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const gallery = [
    {
      type: "gif",
      src: "https://i.ibb.co/N6YGy0gL/VR-GIF.gif",
      title: "VR Gaming",
      description: "Immersive multiplayer virtual reality experiences"
    },
    {
      type: "gif",
      src: "https://i.ibb.co/GvjgWYgk/karaoke-1024x576.gif",
      title: "Interactive Karaoke",
      description: "Next-gen karaoke experiences"
    },
    {
      type: "gif",
      src: "https://i.ibb.co/prLm3jwc/disco-theme-gif-576x1024.gif",
      title: "Immersive Disco",
      description: "Dynamic light shows and interactive music experiences"
    },
    {
      type: "gif",
      src: "https://i.ibb.co/Qjkkk89y/pacman-gif.gif",
      title: "Projected Games",
      description: "Reimagined arcade classics"
    },
    {
      type: "gif",
      src: "https://i.ibb.co/4nk22DjY/Roomscale-games.gif",
      title: "Room-Scale VR",
      description: "Full-body immersive gaming"
    },
    {
      type: "gif",
      src: "https://i.ibb.co/pBKCY3cp/UBR-VR-2.gif",
      title: "Multiplayer VR",
      description: "Social VR gaming experiences"
    }
  ];

  const funTimeFeatures = [
    {
      icon: <Music className="w-10 h-10 text-purple-500" />,
      title: "Immersive Disco and Parties",
      description: "Step onto the floor and lose yourself in a dazzling world of lights, music, and immersive visuals. Groove to the beats in a 360° experience that transforms every dance move into a journey of sound and color!",
      media: "https://i.ibb.co/b5tQRqFq/Video-Capture-20240721-014245.jpg"
    },
    {
      icon: <PartyPopper className="w-10 h-10 text-pink-400" />,
      title: "Immersive Birthdays",
      description: "Enjoy a birthday like no other with our immersive package! Delight in special cake time, engage in a lively freeze game, and see personalized messages projected on the walls, creating a magical atmosphere filled with fun and surprises. Every detail is designed to make your day extraordinary!",
      media: "https://i.ibb.co/tpgqzF1K/IMG03203-1024x683.jpg"
    },
    {
      icon: <Sparkles className="w-10 h-10 text-blue-400" />,
      title: "Immersive Themed Events",
      description: "Celebrate in style with our immersive themed events, like Halloween and more! Each event transforms our space with stunning visuals, interactive elements, and customized experiences that bring the theme to life. Every detail is crafted for a memorable experience you won't forget.",
      media: "https://i.ibb.co/JR2T57sb/image34.png"
    }
  ];

  const gamesFeatures = [
    {
      icon: <Gamepad className="w-10 h-10 text-green-400" />,
      title: "Virtual Reality Games",
      description: "We are proud to present our very unique VR Arena, connecting physical and digital worlds and featuring a Free-Roaming VR Multiplayer area where guests can play with their friends, family and colleagues. Up to 10 players can join in the same session in a 5v5 or together in our Co-Op mode. Our VR games and maps, and can be adapted for other B2B needs perfect for testing new ideas, promote an brand in a novel way inside the game and captivate audiences.",
      media: "https://i.ibb.co/HTvxYMd8/game-VR-Kid-1024x478.jpg"
    },
    {
      icon: <Map className="w-10 h-10 text-yellow-400" />,
      title: "Projected Games",
      description: "(Roomscale games / Spatial games) Enjoy the excitement of room-scale games that get you moving! These interactive games allow you to explore and play freely, using your entire body to control the action. Perfect for engaging all ages in dynamic, real-world gameplay that's as immersive as it is fun!",
      media: "https://i.ibb.co/4nk22DjY/Roomscale-games.gif"
    },
    {
      icon: <Users className="w-10 h-10 text-red-400" />,
      title: "Pictionary & Treasure Hunts",
      description: "Pictionary: Shared fun immersive experience and creative playtime! Guests team up into 2 teams and go into rounds of drawing (words, verbs, movies, etc) projected live on the wall. May the team who draws the best or who guesses the faster win! Treasure hunt: Embark on a thrilling treasure hunt that will challenge your mind and test your teamwork! Follow clues, solve puzzles, and navigate through immersive environments as you race against the clock to uncover hidden treasures.",
      media: "https://i.ibb.co/KphMRkPD/image9.png"
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
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />
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
              WOW Zone – Entertainment
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Your Portal to Fun Immersive Shared Experiences
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
              Step into the WOW Zone
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Where fun and creativity collide in unforgettable ways. Explore cutting-edge XR experiences that bring joy, thrill, and innovation to life. Immerse yourself in unforgettable fun with VR multiplayer games, immersive karaoke, discos, and more, designed to excite, engage, and inspire!
            </p>
            <p className="text-xl text-purple-300 font-semibold mb-8">
              Perfect for audiences of all ages and occasions
            </p>
            <div className="video-container mb-8">
              <iframe
                src="https://www.youtube.com/embed/TQkXAtgDlhw?controls=1&rel=0&playsinline=0&modestbranding=1&autoplay=0"
                title="Entertainment at WOW ZONE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="rounded-2xl shadow-2xl"
              ></iframe>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              At WOW Zone, we blend the digital and physical worlds via cutting-edge XR technology, and offer unique opportunities for immersive fun, creative exploration, brand activation, and transformative engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fun Time Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">FUN TIME</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Below are some of the WOW Experiences our audiences seeking to be Entertained love:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {funTimeFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
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

      {/* Games Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">GAMES</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Experience cutting-edge gaming technology that brings people together in exciting new ways.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {gamesFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
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

      {/* Interactive Gallery */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Experience the Future of Entertainment
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
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
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

export default Entertainment;