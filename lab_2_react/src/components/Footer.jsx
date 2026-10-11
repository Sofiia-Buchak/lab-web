function Footer() {
  return (
    <footer className="bg-white py-10 mt-auto border-t border-gray-200 text-center">
      <h2 className="text-xl font-bold text-[#800020] mb-4">Контакти</h2>
      <div className="flex justify-center space-x-6 mb-6">
        <a href="mailto:sofiia.buchak.kb.2025@lpnu.ua" className="text-gray-600 hover:text-[#800020] transition-colors font-medium">
          sofiia.buchak.kb.2025@lpnu.ua
        </a>
        <a href="https://github.com/Sofiia-Buchak" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#800020] transition-colors font-medium">
          GitHub
        </a>
      </div>
      <p className="text-sm text-gray-400">&copy; 2026 Бучак Софія. Усі права захищено.</p>
    </footer>
  );
}

export default Footer;