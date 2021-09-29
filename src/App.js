import AboutMe from "./componets/aboutMe/AboutMe";
import ContactMe from "./componets/contactMe/ContactMe";
import Footer from "./componets/footer/Footer";
import Hero from "./componets/hero/Hero";
import Portfolio from "./componets/portfolio/Portfolio";
import Resume from "./componets/resume/Resume";

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <Resume />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
