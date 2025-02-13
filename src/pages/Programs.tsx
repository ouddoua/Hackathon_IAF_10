import React from 'react';
import { motion } from 'framer-motion';
import iaflogo from '../Logos/Logo_IAF.png'

const Programs = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nos Programmes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos initiatives pour soutenir et promouvoir les femmes dans l'ingénierie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            
            {
              title: 'Lancement de l’opération Ingénieuses 2025',
              description: 'Bénéficiez de l\'expérience de mentors expérimentés pour développer votre carrière.',
              image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            },
            {
              title: 'Table ronde sur les métiers d’ingénieur·e dans la construction et l’industrie (15 février 2024)',
              description: 'Quatre ingénieures de entreprises locales et deux étudiantes ont partagé leurs parcours et perspectives sur la place des femmes dans ces secteurs, devant un public de 80 participants, dont 60 lycéen·ne·s.',
              image: 'https://media.licdn.com/dms/image/v2/D4E22AQEDAoLAkblDxg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1708608692243?e=1742428800&v=beta&t=1KmRALlEZZ9Jq1uNWkU7r3gzjd8_DGpoODv13v5-yGI',
            },
            {
              title: 'Congrès Ingénieure au féminin - 2e édition (30 septembre - 1er octobre 2023)',
              description: 'Ce congrès se est tenu au centre de congrès Delta à Sherbrooke, offrant des conférences et des ateliers axés sur la place des femmes en ingénierie. ',
              image:iaflogo,
            },
            {
              title: 'Soirée réseautage avec BBA  (1er novembre 2023)',
              description: 'Une soirée dédiée au réseautage entre étudiantes et professionnels de l’ingénierie, organisée en collaboration avec la firme BBA. ',
              image: iaflogo,
            },
            {
              title: 'Soirée d’intégration 70 (13 septembre 2024)',
              description: 'La quatrième édition de cette soirée a accueilli de nouvelles étudiantes en ingénierie, favorisant les échanges et l’intégration au sein de la communauté.',
              image: iaflogo,
            },
            {
              title: 'Cinéparc Génie au féminin  (11 juillet 2023)',
              description: 'Projection en plein air du film "Mamma Mia" pour les étudiantes et étudiants, combinant divertissement et convivialité.',
              image: iaflogo,
            },
            {
              title: 'Conférence dans les écoles secondaires (10 février 2023)',
              description: 'Première activité éducative en présentiel visant à sensibiliser les élèves du secondaire aux carrières en ingénierie.',
              image: iaflogo,
            },
            {
              title: 'Viens échanger avec Génie au Féminin no.3  (30 novembre 2022)',
              description: 'Une soirée d’échanges et de discussions sur divers sujets liés à l’ingénierie et à la place des femmes dans ce domaine.',
              image: iaflogo,
            },
            {
              title: 'Les alliés avec CIMA+ (24 novembre 2022)',
              description: 'Une session abordant le rôle des alliés masculins dans le soutien aux femmes en ingénierie, en collaboration avec CIMA+. ',
              image: iaflogo,
            },
            {
              title: 'Participation à la création d’une fresque interactive sur le métier d’ingénieur·e (1er février 2024)',
              description: 'Collaboration avec le lycée Berthollet pour réaliser une fresque visant à montrer les parcours possibles pour acquérir un diplôme d’ingénieur·e, ainsi que la diversité des métiers, des profils et des motivations. ',
              image: iaflogo,
            },
            {
              title: 'Présentation du parcours d’étudiant·e·s lors de l’événement « Les métiers scientifiques et industriels, c’est aussi pour les filles » (1er décembre 2023)',
              description: 'Deux étudiant·e·s ont partagé leur expérience devant 200 lycéennes de seconde au lycée Charles Poncet de Cluses, pour les encourager à envisager des carrières en sciences et en ingénierie. ',
              image: iaflogo,
            },
            {
              title: 'Interventions dans des collèges lors de l’édition 2023 de « Elles Bougent pour l’orientation » (7 décembre 2023)',
              description: 'Visites des collèges Les Barattes à Annecy et Jean Jacques Perret pour promouvoir les métiers d’ingénieur·e auprès des collégiennes. ',
              image:iaflogo,
            },
            {
              title: 'Visites de lycées et collèges sur initiative des étudiant·e·s (dates diverses)',
              description: 'Présentations dans les lycées Jean Moulin à Albertville et Lachenal à Argonay, ainsi que le collège Louis Armand à Cruseilles, pour sensibiliser les élèves aux carrières en ingénierie.  ',
              image: iaflogo,
            },
            {
              title: 'Création de pages LinkedIn et Instagram pour l’association (2023)',
              description: 'Lancement de plateformes en ligne pour partager les actualités de l’association et sensibiliser à l’égalité femme-homme dans le domaine de l’ingénierie. ',
              image: iaflogo,
            },
            {
              title: 'Tenue d’un stand lors des journées portes ouvertes de l’école (3 février 2024)',
              description: 'Promotion du métier d’ingénieur·e auprès des filles lors des journées portes ouvertes de Polytech Annecy-Chambéry. ',
              image: iaflogo,
            },
            {
              title: 'Participation au concours « Ingénieuses » de la CDEFI (16 mai 2024)',
              description: 'L’association a reçu le prix de l’engagement étudiant pour ses actions visant à promouvoir l’égalité des genres dans l’ingénierie. ',
              image: iaflogo ,
            },

          ].map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-64 relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;