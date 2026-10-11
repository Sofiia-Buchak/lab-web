function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-16 px-4 bg-white shadow-sm">
      <h1 className="text-4xl md:text-5xl font-bold text-[#800020] mb-4 tracking-wide text-center">
        Бучак Софія
      </h1>
      <p className="text-lg md:text-xl text-gray-500 text-center max-w-2xl">
        Студентка 2-го курсу спеціальності "Кібербезпека" | Фахівчиня-початківець із захисту інформації
      </p>
    </header>
  );
}

export default Header;