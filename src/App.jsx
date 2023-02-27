import { useEffect, useState } from "react";

import "./App.css";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./layout/DotGroup";
import Landing from "./layout/Landing";
import MySkill from "./layout/MySkill";
import { motion } from "framer-motion";

import Navbar from "./layout/Navbar";
import Projects from "./layout/Projects";
import Testimonials from "./layout/Testimonials";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumSecreen = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumSecreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full md:mb-24">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <MySkill />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("testimonials")}
        >
          <Testimonials />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:mb-24">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
