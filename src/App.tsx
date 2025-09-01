// App component - Main application entry point
import { CustomThemeProvider } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
    </CustomThemeProvider>
  );
}

export default App;
