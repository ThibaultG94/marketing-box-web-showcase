import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CTA from "./components/sections/CTA";
import Expertise from "./components/sections/Expertise";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
