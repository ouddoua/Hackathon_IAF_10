import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import iness from '../Logos/INES.PNG'
import iness1 from '../Logos/ines1.png'
import iness2 from '../Logos/ines2.jpeg'
import { link } from 'framer-motion/client';


const News = () => {
  const blogPosts = [
    {
      title: "VISITE DE L'INES",
      excerpt: "Retour en images sur la visite de l’Institut National de l’Energie Solaire (INES) organisée par Ingénieur.e Au Féminin pour les élèves du lycée Gaspard Monge",
      
      date: "12 Février 2025",
      image: iness,
      link : "https://www.instagram.com/iaf_7374/reel/DF-hVTUqdkh/"
    },
    {
      title: "Ciné-Débat",
      excerpt: "Soirée Décontrac’t financée par la CVEC et organisée par le Service Vie Etudiante et IAF Diffusion du film Une Femme d’Exception suivie d’un débat libre autour de la place des femmes dans des métiers d’hommes et l’égalité des genres.",
      
      date: "18 Février 2025",
      image: iness1,
      link : "https://www.instagram.com/iaf_7374/p/DF708gxqM4U/"
    },
    {
      title: "Exposition",
      excerpt: "Dans le cadre de la semaine Plus d'Égalité, IAF expose dans le hall de Polytech les portraits de femmes dont les recherches scientifiques ont été volées ou oubliées par l’Histoire.",
      
      date: "25 Février 2025",
      image: iness2,
      link : "https://www.instagram.com/iaf_7374/p/DF0e5H1q9ug/"
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">News</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos derniers  posts mis sur nos réseaux sociaux. 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
                >
                 Lire la suite
                 <ArrowRight className="h-4 w-4 ml-2" />
               </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;