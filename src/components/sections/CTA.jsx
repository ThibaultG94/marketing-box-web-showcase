import React from "react";
import { motion } from "framer-motion";

const ActionButton = ({ children, href = "#", className = "" }) => (
  <motion.a
    href={href}
    className={`inline-block bg-white text-black px-8 py-3 rounded-lg text-xl font-semibold ${className}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.a>
);

const CTA = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Partner brand logos
  const brandLogos = [
    { src: "/src/assets/leclerc-logo.png", alt: "Leclerc" },
    {
      src: "/src/assets/serre-papillons-logo.png",
      alt: "La Serre aux Papillons",
    },
    { src: "/src/assets/jomo-logo.png", alt: "Jomo" },
    { src: "/src/assets/burger-king-logo.png", alt: "Burger King" },
  ];

  return (
    <>
      {/* Partner logos section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-medium text-center mb-16"
          >
            ON ADORE ÊTRE À LEURS CÔTÉS
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-5xl mx-auto">
            {brandLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Acquisition section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <h2 className="text-4xl font-bold mb-12 leading-tight">
                UN CLIENT,
                <br />
                UN AUTRE,
                <br />
                ENCORE UN !
              </h2>

              <div className="space-y-8 text-lg">
                <p>
                  Nos experts vous accompagnent et vous génèrent des contacts
                  qualifiés.
                </p>
                <p>Ne courez plus après vos prospects !</p>
                <p>
                  Boostez les performances de votre équipe commerciale grâce à
                  la technologie.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <img
                src="/src/assets/analyse-performance.png"
                alt="Analyse de performance commerciale"
                className="rounded-lg w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* IA and Tools section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold max-w-4xl mx-auto mb-8"
          >
            Mettez les outils, les algorithmes, les robots et l'intelligence
            artificielle au service de votre performance.
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ActionButton href="#discuter" className="mt-8">
              Je veux en discuter
            </ActionButton>
          </motion.div>
        </div>
      </section>

      {/* Expertise and Tools section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <img
                src="/src/assets/equipe-brainstorming.png"
                alt="Équipe brainstorming"
                className="rounded-lg w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold mb-12">
                DES EXPERTISES.
                <br />
                DES OUTILS.
                <br />
                UN INTERLOCUTEUR UNIQUE !
              </h2>

              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  Toute une équipe à vos côtés, un interlocuteur unique.
                </p>

                <p className="text-lg">
                  Publicités, réseaux sociaux, applications et sites web, studio
                  créatif, impression de documents, automatisation.
                </p>

                <div className="flex items-start gap-2 mt-6">
                  <span className="text-green-600 text-xl">✓</span>
                  <p className="text-lg">
                    Une équipe d'experts à votre service, encadrés par un
                    consultant unique à vos côtés.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
