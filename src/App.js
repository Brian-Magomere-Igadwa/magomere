import logo from "./logo.svg";
import "./App.css";

import "./core/components/styles/Global.css";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

export default App;
