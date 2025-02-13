import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Users, BookOpen, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-white text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-[#ed0f4e]"
          >
            Encourager, Inspirer, Soutenir <br />
            les Femmes Ingénieures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-[#ed0f4e]"
          >
            Ensemble, construisons un avenir plus inclusif dans l'ingénierie
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/join"
              className="inline-flex items-center px-8 py-3 bg-white text-[#ed0f4e] rounded-full font-semibold hover:bg-[#d10944] transition-colors"
            >
              Rejoignez-nous
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center px-8 py-3 border-2 border-[#ed0f4e] text-[#ed0f4e] rounded-full font-semibold hover:bg-[#ed0f4e] hover:text-white transition-colors"
            >
              Découvrir nos programmes
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Impact
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez comment nous transformons le monde de l'ingénierie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-[#ed0f4e]" />,
                title: 'Mentorat',
                description:
                  'Programme de mentorat personnalisé pour accompagner les futures ingénieures',
              },
              {
                icon: <BookOpen className="h-8 w-8 text-[#ed0f4e]" />,
                title: 'Formations',
                description:
                  'Ateliers et formations pour développer vos compétences techniques',
              },
              {
                icon: <Calendar className="h-8 w-8 text-[#ed0f4e]" />,
                title: 'Événements',
                description:
                  'Conférences et networking pour élargir votre réseau professionnel',
              },
              {
                icon: <Award className="h-8 w-8 text-[#ed0f4e]" />,
                title: 'Bourses',
                description:
                  'Programmes de bourses pour soutenir vos études en ingénierie',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
