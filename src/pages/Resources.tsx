import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Link as LinkIcon } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ressources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des outils et ressources pour vous accompagner dans votre parcours professionnel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-[#ed0f4e] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Guides Pratiques</h2>
            </div>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-[#ed0f4e] transition-colors">Guide du CV parfait</li>
              <li className="text-gray-600 hover:text-[#ed0f4e] transition-colors">Préparer son entretien</li>
              <li className="text-gray-600 hover:text-[#ed0f4e] transition-colors">Négocier son salaire</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#ed0f4e] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Articles</h2>
            </div>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-[#ed0f4e] transition-colors">Tendances en ingénierie</li>
              <li className="text-gray-600 hover:text-[#ed0f4e] transition-colors">Témoignages inspirants</li>
              <li className="text-gray-600 hover:text-[#ed0f4e] transition-colors">Conseils carrière</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <LinkIcon className="h-8 w-8 text-[#ed0f4e] mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Liens Utiles</h2>
            </div>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-[#ed0f4e] transition-colors">Associations partenaires</li>
              <li className="text-gray-600 hover:text-[#ed0f4e] transition-colors">Opportunités de stage</li>
              <li className="text-gray-600 hover:text-[#ed0f4e] transition-colors">Formations en ligne</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
