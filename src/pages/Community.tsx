import React from 'react';
import { motion } from 'framer-motion';
/// <reference types="vite/client" />

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

// Importez les logos depuis le dossier logos
import cvecLogo from '../Logos/Logo_CVEC.png';
import listicLogo from '../Logos/Logo_LISTIC.jpg';
import ntnLogo from '../Logos/Logo_NTN.png';
import creditAgricoleLogo from '../Logos/Logo_Credit_Agricol_Technologies_Services.jpg';
import sopraSteriaLogo from '../Logos/Logo_Sopra_Steria.png';
import IAFlogo from '../Logos/Logo_IAF.png'

const Community = () => {
  return (
    <div
      className="min-h-screen bg-white py-20"
      
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Notre Communauté</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos précieux partenariats et explorez les logos de ceux qui nous soutiennent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {/* Case 1 : CVEC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <img src={cvecLogo} alt="CVEC Logo" className="h-24 w-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">CVEC</h3>
            <p className="text-gray-600">
              Échangez avec d'autres membres sur des sujets professionnels et techniques.
            </p>
          </motion.div>

          {/* Case 2 : LISTIC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <img src={listicLogo} alt="LISTIC Logo" className="h-24 w-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">LISTIC</h3>
            <p className="text-gray-600">
              Rejoignez des groupes spécialisés selon vos intérêts et votre domaine.
            </p>
          </motion.div>

          {/* Case 3 : NTN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <img src={ntnLogo} alt="NTN Logo" className="h-24 w-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">NTN</h3>
            <p className="text-gray-600">
              Restez informée des dernières actualités et opportunités.
            </p>
          </motion.div>

          {/* Case 4 : Credit Agricole */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <img src={creditAgricoleLogo} alt="Credit Agricole Logo" className="h-24 w-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Credit Agricole</h3>
            <p className="text-gray-600">
              Engagez-vous dans un réseau d'étudiants et de professeurs pour partager vos connaissances.
            </p>
          </motion.div>

          {/* Case 5 : Sopra Steria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <img src={sopraSteriaLogo} alt="Sopra Steria Logo" className="h-24 w-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Sopra Steria</h3>
            <p className="text-gray-600">
              Collaborez avec des entreprises qui soutiennent notre communauté.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Community;