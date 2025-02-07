import { motion } from "framer-motion";

const CTAButton = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#42277e] text-white text-md px-6 py-2.5 lg:text-lg lg:px-8 lg:py-3 rounded-lg font-semibold transition-all"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.a>
);

const PhoneNumber = () => (
  <motion.a
    href="tel:01.34.77.20.03"
    className="flex items-center gap-1 text-lg lg:text-xl text-[#2b2a35] font-medium"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="hidden sm:inline">📲</span>
    01.23.45.67.89
  </motion.a>
);

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50"
    >
      <div className="container mx-auto px-4 xs:px-12 lg:px-22 pt-3 pb-4.5">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <motion.a href="/" whileHover={{ scale: 1.05 }} className="w-20">
            <img
              src="/src/assets/logo.png"
              alt="Marketing Box Logo"
              className="w-full h-auto"
            />
          </motion.a>

          {/* Right-hand navigation */}
          <div className="hidden md:flex items-center gap-10">
            <PhoneNumber />
            <CTAButton href="https://projet.marketingbox.fr">
              Prendre RDV
            </CTAButton>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
