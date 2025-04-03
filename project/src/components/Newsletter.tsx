import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <Mail className="w-12 h-12 mx-auto mb-6 text-purple-400" />
      <h2 className="text-3xl font-bold mb-4">Join the Creative Party</h2>
      <p className="text-gray-300 mb-8">
        Welcome onboard our Creative Dreamscape and Multiverse
      </p>
      <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email here"
          className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-purple-500/30 focus:border-purple-500 focus:outline-none text-white"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-200 transform hover:scale-105"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;