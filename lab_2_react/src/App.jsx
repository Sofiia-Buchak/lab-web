import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  // 1. Змінна стану для теми
  const [theme, setTheme] = useState('light');

  // 2. Автоматичне визначення теми при завантаженні (денна: 07:00 - 21:00)
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // 3. Застосування теми до всього документа
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#e0e0e0';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#fbf9f9';
      document.body.style.color = '#333333';
    }
  }, [theme]);

  // Функція для ручного перемикання, яку ми передаємо в Header
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    // Прибрано жорсткий світлий фон, додано плавний перехід (transition-colors)
    <div className="min-h-screen font-sans text-gray-700 dark:text-gray-300 flex flex-col transition-colors duration-300">
      
      {/* Передаємо пропси у шапку сайту */}
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main className="max-w-4xl mx-auto w-full px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Reviews />
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;