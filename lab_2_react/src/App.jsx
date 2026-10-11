import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fbf9f9] font-sans text-gray-700 flex flex-col">
      <Header />
      
      <main className="max-w-4xl mx-auto w-full px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        <About />
        <Education />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;