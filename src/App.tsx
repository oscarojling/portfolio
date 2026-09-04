import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ConnectorSpine from "./components/ConnectorSpine";

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main className="relative mx-auto max-w-5xl px-6 md:px-10">
        <ConnectorSpine />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
