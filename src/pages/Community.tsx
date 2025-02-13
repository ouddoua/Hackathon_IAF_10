import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Mail } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Notre Communauté</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez une communauté dynamique de femmes ingénieures et participez à des échanges enrichissants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <MessageCircle className="h-12 w-12 text-[#ed0f4e] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Forum de Discussion</h3>
            <p className="text-gray-600">
              Échangez avec d'autres membres sur des sujets professionnels et techniques.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <Users className="h-12 w-12 text-[#ed0f4e] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Groupes Thématiques</h3>
            <p className="text-gray-600">
              Rejoignez des groupes spécialisés selon vos intérêts et votre domaine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <Mail className="h-12 w-12 text-[#ed0f4e] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600">
              Restez informée des dernières actualités et opportunités.
            </p>
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#fce4e9] p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Inscrivez-vous à notre newsletter
            </h3>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ed0f4e]"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#ed0f4e] text-white rounded-md hover:bg-[#d10944] transition-colors"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
