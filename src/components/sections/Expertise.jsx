import { motion } from "framer-motion";

const ExpertiseCard = ({ icon, title }) => (
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <img
      src={`/src/assets/${icon}.png`}
      alt={title}
      className="w-32 h-32 mb-6"
    />
    <h3 className="text-center text-lg font-medium leading-5.5">{title}</h3>
  </motion.div>
);

const WhiteButton = ({ href, children }) => (
  <motion.a
    href={href}
    className="inline-block bg-white text-black font-bold px-6 sm:px-8 py-3 rounded-lg text-xl mt-8 w-4/5 sm:w-auto"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.a>
);

const Expertise = () => {
  const expertises = [
    { icon: "puzzle", title: "CONSEILS ET STRATÉGIE" },
    { icon: "cursor", title: "CRÉATION SITES WEB & APPLICATIONS" },
    { icon: "hashtag", title: "RÉSEAUX SOCIAUX ET PUBLICITÉS" },
    { icon: "rocket", title: "AUTOMATISATION & PRODUCTIVITÉ" },
  ];

  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nos expertises
          </motion.h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-16 max-w-5xl mx-auto mb-16">
            {expertises.map((expertise, index) => (
              <ExpertiseCard key={index} {...expertise} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            className="text-2xl font-bold max-w-5xl mx-auto leading-9"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Notre équipe Tech et Créative imagine et déploie les meilleures
            stratégies
            <br />
            pour vous accompagner vers le succès.
          </motion.p>
          <WhiteButton href="#contact">Être rappelé</WhiteButton>
        </div>
      </section>
    </>
  );
};

export default Expertise;
