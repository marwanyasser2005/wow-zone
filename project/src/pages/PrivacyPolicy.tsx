import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Eye, FileKey } from 'lucide-react';

const PrivacyPolicy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sections = [
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />, 
      title: "Information We Collect",
      content: [
        "Personal information you provide directly",
        "Website usage data and analytics",
        "Event and experience interactions",
        "Marketing engagement data"
      ]
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-400" />, 
      title: "How We Use Your Information",
      content: [
        "Personalize and improve experiences",
        "Process bookings and inquiries",
        "Send marketing communications (with consent)",
        "Analyze trends and improve services"
      ]
    },
    {
      icon: <Eye className="w-8 h-8 text-green-400" />, 
      title: "Your Data Protection Rights",
      content: [
        "Access and correct your data",
        "Opt-out of marketing",
        "Request data deletion",
        "Restrict data processing"
      ]
    },
    {
      icon: <FileKey className="w-8 h-8 text-pink-400" />, 
      title: "Data Security & Retention",
      content: [
        "Industry-standard security measures",
        "Secure data retention policies",
        "Third-party compliance",
        "Regular security updates"
      ]
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Privacy Policy</h1>
          <div className="text-gray-400 text-center mb-12">
            <p>Effective Date: Jan 1 2025</p>
            <p>Last Updated: Feb 21 2025</p>
          </div>

          <section className="mb-12">
            <p className="text-gray-300 leading-relaxed">
              Welcome to WOW Immersive, where immersive experiences, creativity, and technology converge. 
  Your privacy is important to us, and we are committed to protecting your personal data when you engage with our 
  digital platforms, immersive events, and interactive experiences. This Privacy Policy outlines how we collect, 
  use, and safeguard your data.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white/10 rounded-lg mr-4">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.content.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div ref={ref} className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Cookies & Tracking Technologies</h2>
              <p className="text-gray-300">We use cookies and similar tracking tools to enhance your browsing experience. You can manage or disable cookies through your browser settings. For more details, visit our Cookie Policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
              <p className="text-gray-300">Our website and experiences may include links to third-party services. We are not responsible for their privacy policies or data practices.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Updates to This Privacy Policy</h2>
              <p className="text-gray-300">We may update this policy from time to time to reflect changes in our practices. Any updates will be posted on this page with a revised "Last Updated" date.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300">If you have any questions or concerns about this Privacy Policy or your data, please contact us at:</p>
              <div className="mt-4 space-y-2">
                <p className="text-purple-400">📩 Email: hello@d2d-art.com</p>
                <p className="text-purple-400">🌐 Website: <a href="https://wowzone.co/" className="underline">https://wowzone.co/</a></p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
