import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-[#ed0f4e]" />
              <span className="font-bold text-xl text-[#ed0f4e]">Ingénieur·e Au Féminin</span>
            </div>
            <p className="mt-4 text-gray-400">
              Encourager, Inspirer, Soutenir les Femmes Ingénieures. Ensemble, construisons un avenir plus inclusif dans l'ingénierie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#ed0f4e]">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#ed0f4e] transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-[#ed0f4e] transition-colors">
                  Programmes
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-[#ed0f4e] transition-colors">
                  Ressources
                </Link>
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#ed0f4e]">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#ed0f4e]" />
                <a href="mailto:contact@ingenieure-au-feminin.fr" className="text-gray-400 hover:text-[#ed0f4e] transition-colors">
                  contact@ingenieure-au-feminin.fr
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#ed0f4e]" />
                <span className="text-gray-400">+33 (0)1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-[#ed0f4e]" />
                <span className="text-gray-400">Annecy, France</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-4 flex space-x-4">
              <a href="https://www.linkedin.com/company/ing%C3%A9nieur-e-au-f%C3%A9minin?trk=public_post-text" className="text-gray-400 hover:text-[#ed0f4e] transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/iaf_7374/" className="text-gray-400 hover:text-[#ed0f4e] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Ingénieur·e Au Féminin. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
