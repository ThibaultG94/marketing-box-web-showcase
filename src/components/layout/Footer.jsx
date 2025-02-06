import React from "react";
import { motion } from "framer-motion";

const FooterLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-white/80 hover:text-white transition-colors duration-200"
    whileHover={{ x: 2 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.a>
);

const FooterColumn = ({ title, links }) => (
  <div className="space-y-4">
    <h3 className="text-white font-medium text-lg mb-4">{title}</h3>
    <div className="flex flex-col space-y-2">
      {links.map((link, index) => (
        <FooterLink key={index} href={link.href}>
          {link.text}
        </FooterLink>
      ))}
    </div>
  </div>
);

const Footer = () => {
  const footerSections = {
    marketingBox: {
      title: "MarketingBox",
      links: [{ href: "#", text: "Nous contacter" }],
    },
    contact: {
      title: "Contact",
      links: [{ href: "#", text: "Prendre rendez-vous" }],
    },
  };

  return (
    <footer className="bg-black text-white pt-12 pb-21">
      <div className="container px-10">
        <div className="flex flex-col md:grid md:grid-cols-2 justify-between items-start">
          <div className="mb-8 md:mb-0 pl-20">
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <img
                src="/src/assets/logo-white.png"
                alt="Marketing Box"
                className="w-16 h-16 object-contain"
              />
            </motion.a>
            <p className="text-white/60 mt-4 text-sm">Tous droits réservés.</p>
          </div>

          <div className="grid grid-cols-2 gap-16">
            {Object.entries(footerSections).map(([key, section]) => (
              <FooterColumn
                key={key}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
