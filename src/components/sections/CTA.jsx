import React from "react";
import { motion } from "framer-motion";

const ActionButton = ({ children, href = "#", className = "" }) => (
  <motion.a
    href={href}
    className="inline-block bg-white text-black font-bold px-10 py-3 rounded-lg text-xl mt-8 mb-2"
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-thin text-gray-800 text-center mb-32 tracking-wider"
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
                  className="w-40 h-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Acquisition section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-21">
          <div className="grid grid-cols-1 lg:flex gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <h2 className="text-4xl font-bold mb-7 leading-tight">
                UN CLIENT,
                <br />
                UN AUTRE,
                <br />
                ENCORE UN !
              </h2>

              <div className="space-y-8 text-xl/7.5 font-thin tracking-wide max-w-[550px]">
                <p>
                  Nos experts vous accompagnent et vous génèrent des contacts
                  qualifiés.
                  <br />
                  Ne courez plus après vos prospects !
                </p>
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
                className="rounded-lg w-[414px] h-[414px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* IA and Tools section */}
      <section className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl/9 font-bold max-w-4xl mx-auto"
          >
            Mettez les outils, les algorithmes, les robots et <br />{" "}
            l'intelligence artificielle au service de votre performance.
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square items-self-center justify-self-center"
            >
              <img
                src="/src/assets/equipe-brainstorming.png"
                alt="Équipe brainstorming"
                className="rounded-lg w-[449px] lg:w-[351px] h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold mb-12 leading-tight text-gray-800">
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
