
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-lilac-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-gold-200">Dra. Marlene Inzunza Morales</h3>
            <p className="text-lilac-200 mt-2 text-sm">+30 años creando sonrisas.</p>
            <p className="text-lilac-400 mt-1 text-xs">Aviso de Publicidad 2425042002A00219</p>
          </div>
        </div>
        
        <div className="border-t border-lilac-900 mt-8 pt-8 text-center text-sm text-lilac-400">
          <p>&copy; {new Date().getFullYear()} Dra. Marlene Inzunza Morales. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs">Aviso de Privacidad | Términos y Condiciones</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
