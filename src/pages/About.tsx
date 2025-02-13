import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Notre Mission</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Promouvoir et soutenir les femmes dans le domaine de l'ingénierie, en favorisant un environnement inclusif, innovant et stimulant, où chaque femme peut se développer et s'épanouir. Nous visons à créer des opportunités pour briser les stéréotypes de genre et encourager les jeunes filles à envisager des carrières en ingénierie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: 'Innovation',
              description: 'L\'innovation est essentielle pour transformer l\'ingénierie. Elle permet de trouver de nouvelles solutions créatives aux défis complexes. En encourageant l\'innovation, nous stimulons les progrès technologiques et améliorons les processus, ce qui ouvre des perspectives et des opportunités dans tous les domaines de l\'ingénierie.',
            },
            {
              title: 'Inclusion',
              description: 'L\'inclusion vise à créer un environnement où chaque femme ingénieure se sent valorisée, respectée et soutenue. Cela implique d\'offrir un accès égal aux opportunités, de favoriser la diversité et de promouvoir un milieu de travail équitable et accueillant, où toutes les voix sont entendues.',
            },
            {
              title: 'Excellence',
              description: ' Nous engageons à promouvoir l\'excellence chez les femmes ingénieures, en offrant un environnement propice à leur épanouissement professionnel  .',
              button: (
                <a href="https://www.ingenieuses.fr/loperation-ingenieuses/" target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 px-6 py-2 bg-[#ed0f4e] text-white rounded-full hover:bg-[#d1053c]">
                    Lire la suite
                  </button>
                </a>
              ),
            }]
              .map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <h3 className="text-2xl font-semibold text-[#ed0f4e] mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                  {value.button && value.button} {/* Afficher le bouton si défini */}
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;