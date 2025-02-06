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
  // Animation variants pour le texte qui apparaît
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                UN CLIENT,
                <br />
                UN AUTRE,
                <br />
                ENCORE UN !
              </h2>

              <div className="space-y-6 text-lg">
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
              className="relative h-96"
            >
              <img
                src="/src/assets/analyse-performance.png"
                alt="Analyse de performance commerciale"
                className="rounded-lg object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold max-w-4xl mx-auto mb-8"
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

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <img
                src="/src/assets/equipe-brainstorming.png"
                alt="Équipe brainstorming"
                className="rounded-lg object-cover w-full h-full"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold mb-8">
                DES EXPERTISES.
                <br />
                DES OUTILS.
                <br />
                UN INTERLOCUTEUR UNIQUE !
              </h2>

              <p className="text-lg mb-4">
                Toute une équipe à vos côtés, un interlocuteur unique.
              </p>

              <p className="text-lg mb-4">
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
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
