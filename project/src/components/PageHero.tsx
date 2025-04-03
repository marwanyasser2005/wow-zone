import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  videoUrl?: string;
  imageUrl?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, description, videoUrl, imageUrl }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-50"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 drop-shadow-lg">
            {title}
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-300 mb-6 font-semibold tracking-wide drop-shadow-md">
            {subtitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed drop-shadow-sm">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
