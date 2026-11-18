// Приймаємо пропси з App.jsx
function Header({ theme, toggleTheme }) {
  return (
    <header className="flex flex-col items-center text-center py-10 px-5">
      <h1 className="text-[#800020] text-5xl mb-3 font-bold">Бучак Софія</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Студентка 2-го курсу спеціальності "Кібербезпека" | Фахівчиня-початківець із захисту інформації
      </p>
      
      {/* Кнопка ручного перемикання між режимами[cite: 19, 20] */}
      <button 
        onClick={toggleTheme} 
        className="mt-5 px-5 py-2 bg-[#800020] text-white rounded-full font-bold hover:bg-[#5a0016] dark:bg-gray-200 dark:text-[#121212] dark:hover:bg-white transition-colors shadow-sm"
      >
        {theme === 'light' ? '🌙 Нічна тема' : '☀️ Денна тема'}
      </button>
    </header>
  );
}

export default Header;