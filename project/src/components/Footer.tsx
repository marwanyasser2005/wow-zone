import React, { useState } from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const links = [
    { title: "Home", link: "/" },
    { title: "Creative Arts", link: "/creative-arts" },
    { title: "Entertainment", link: "/entertainment" },
    { title: "WOW Studio", link: "/studio" },
    { title: "Technologies", link: "/technologies" },
    { title: "Corporate Events", link: "/corporate-events" },
    { title: "Innovation", link: "/innovation" },
    { title: "Visit Us", link: "/visit" },
    { title: "Privacy Policy", link: "/privacy-policy" }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, link: "https://www.facebook.com/wowzone.co/" },
    { icon: <Instagram className="w-6 h-6" />, link: "https://www.instagram.com/wowzone.co/" },
    { icon: <Youtube className="w-6 h-6" />, link: "https://www.youtube.com/@WOWZone-D2DStudio" },
    { icon: <Twitter className="w-6 h-6" />, link: "https://twitter.com/wowzone" },
  ];

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("submitting");

  const googleFormsURL = "https://docs.google.com/forms/d/e/1FAIpQLSdxHZ7mL3_puzJfVoX3ZUeWgT46vg0vCi9PAolUWvbryVuA5g/formResponse?entry.959108893=";

  try {
    const encodedEmail = encodeURIComponent(email.trim());

    const response = await fetch(`${googleFormsURL}${encodedEmail}`, {
      method: "POST",
      mode: "no-cors"
    });

    console.log("Form submitted:", response); // Debugging: Check console for submission

    setStatus("success");
    setEmail(""); // Clear input after successful submission
  } catch (error) {
    console.error("Form submission error:", error);
    setStatus("error");
  }
};

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Logo and Branding */}
        <div className="flex flex-col items-center mb-12">
          <img
            src="https://i.ibb.co/PGD1Ck4T/Ai-Viewer-1623517776567-2-300x169-1.png"
            alt="WOW Immersive Logo"
            className="h-16 mb-4"
          />
          <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            WOW Immersive
          </h3>
          <p className="text-gray-400 max-w-md mt-2">
            The first immersive experiential playground in Egypt, offering unforgettable VR, creative arts, dance, and interactive fun experiences.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.link}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="max-w-md mx-auto bg-white/10 p-6 rounded-lg shadow-lg mb-12">
          <h4 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Get the latest updates on immersive experiences, events, and exclusive offers!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 p-3 rounded-l-lg text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-purple-600 px-6 py-3 text-white rounded-r-lg hover:bg-purple-500 transition-all disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
            {status === "success" && (
              <p className="text-green-400">Welcome aboard! Check your email for confirmation.</p>
            )}
            {status === "error" && (
              <p className="text-red-400">Oops! Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="text-gray-400 text-sm">
          <p>📍 Platz Mall, New Cairo, Egypt</p>
          <p>📞 Contact: <a href="tel:+201552517799" className="text-purple-400 hover:underline">+20 155 251 7799</a></p>
          <p>📧 Email: <a href="mailto:info@wowzone.co" className="text-purple-400 hover:underline">info@wowzone.co</a></p>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm mt-12">
          <p>&copy; {new Date().getFullYear()} WOW Immersive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;