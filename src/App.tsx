import About from './components/About/About';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <>
      <BurgerMenu />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
