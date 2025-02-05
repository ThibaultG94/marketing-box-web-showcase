import { motion } from "framer-motion";

const ActionButton = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center bg-black text-white px-12 py-4 rounded-lg text-xl font-semibold hover:opacity-90"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.a>
);

const Hero = () => {
  return (
    <section className="relative h-[482px] pt-29">
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          background:
            'url("/src/assets/hero-bg.webp") center 0% / cover no-repeat',
        }}
      ></div>

      <div className="relative h-full z-10">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <motion.h2
              className="text-4xl font-extrabold pb-10 mb-2 leading-13"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Mettez le Digital et la Tech au service
              <br />
              de vos équipes et de votre business.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ActionButton href="https://projet.marketingbox.fr">
                J'ai un projet 🤚🏼
              </ActionButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
