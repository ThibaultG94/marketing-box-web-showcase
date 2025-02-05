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

const Expertise = () => {
  const expertises = [
    {
      icon: "puzzle",
      title: "CONSEILS ET STRATÉGIE",
    },
    {
      icon: "cursor",
      title: "CRÉATION SITES WEB & APPLICATIONS",
    },
    {
      icon: "hashtag",
      title: "RÉSEAUX SOCIAUX ET PUBLICITÉS",
    },
    {
      icon: "rocket",
      title: "AUTOMATISATION & PRODUCTIVITÉ",
    },
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-5xl mx-auto mb-16">
            {expertises.map((expertise, index) => (
              <ExpertiseCard key={index} {...expertise} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            className="text-2xl font-bold max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Notre équipe Tech et Créative imagine et déploie les meilleures
            stratégies
            <br />
            pour vous accompagner vers le succès.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default Expertise;
