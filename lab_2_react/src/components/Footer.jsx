import { useState, useEffect } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({ agent: '', platform: '' });

  useEffect(() => {
    const currentAgent = navigator.userAgent;
    const currentPlatform = navigator.platform;

    localStorage.setItem('userAgent', currentAgent);
    localStorage.setItem('platform', currentPlatform);

    setSysInfo({
      agent: localStorage.getItem('userAgent'),
      platform: localStorage.getItem('platform')
    });
  }, []); 

  return (
    <footer className="py-10 mt-10 border-t border-gray-200 text-center dark:border-gray-800">
      <section id="contact" className="mb-6">
        <h2 className="text-2xl font-bold text-[#800020] mb-4 border-b-2 border-[#800020] inline-block pb-1">
          Контакти
        </h2>
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 list-none p-0 m-0">
          <li>
            Електронна пошта: <a href="mailto:sofiia.buchak.kb.2025@lpnu.ua" className="text-gray-600 hover:text-[#800020] dark:text-gray-400 dark:hover:text-[#800020] transition-colors">sofiia.buchak.kb.2025@lpnu.ua</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/Sofiia-Buchak" target="_blank" rel="noopener noreferrer" className="text-[#800020] font-bold hover:underline">https://github.com/Sofiia-Buchak</a>
          </li>
        </ul>
      </section>

      {/* Динамічний блок із системною інформацією */}
      <div className="max-w-2xl mx-auto mt-6 p-4 bg-[#fbf9f9] border border-[#eaeaea] rounded-lg text-sm text-left text-gray-600 dark:bg-[#1e1e1e] dark:border-[#333] dark:text-[#ccc] shadow-sm">
        <p className="mb-2">
          <strong className="text-[#800020]">ОС (Платформа):</strong> {sysInfo.platform}
        </p>
        <p>
          <strong className="text-gray-700 dark:text-gray-300">Браузер:</strong> {sysInfo.agent}
        </p>
      </div>

      <p className="mt-8 text-sm text-gray-500">&copy; 2026 Бучак Софія. Усі права захищено.</p>
    </footer>
  );
}

export default Footer;