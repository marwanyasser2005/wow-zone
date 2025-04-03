import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import PageHero from '../components/PageHero';

const Visit = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8 text-purple-400" />,
      title: "Location",
      details: "WOW Zone, Platz Mall, New Cairo, Egypt",
      action: {
        text: "Get Directions",
        link: "https://www.google.com/maps/place/WOW+Zone/@30.0218638,31.4445975,17z/data=!3m1!4b1!4m6!3m5!1s0x14583d1656217d21:0xbda3ae4a08459211!8m2!3d30.0218638!4d31.4445975!16s%2Fg%2F11ny351nyj?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
      }
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "Opening Hours",
      details: "Daily: 10:00 AM - 10:00 PM"
    },
    {
      icon: <Phone className="w-8 h-8 text-green-400" />,
      title: "Contact",
      details: "+20 155 251 7799"
    },
    {
      icon: <Mail className="w-8 h-8 text-pink-400" />,
      title: "Email",
      details: "info@wowzone.co"
    }
  ];

  return (
    <div className="bg-black text-white">
      <PageHero
        title="Visit Us"
        subtitle="Experience the Future of Entertainment"
        description="Step into our world of immersive experiences and creative technology. We're located in the heart of New Cairo, ready to transport you to new digital realms."
        imageUrl="https://i.ibb.co/ns1vvpMT/resized-image.png"
      />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.5225223962047!2d31.44459749999999!3d30.0218638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d1656217d21%3A0xbda3ae4a08459211!2sWOW%20Zone!5e0!3m2!1sen!2seg!4v1739980748423!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {contactInfo.map((info, index) => (
                <div key={info.title} className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-xl">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                    <p className="text-gray-300 mb-2">{info.details}</p>
                    {info.action && (
                      <a
                        href={info.action.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                      >
                        {info.action.text} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visit;
