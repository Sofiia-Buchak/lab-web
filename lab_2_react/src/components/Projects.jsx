function Projects() {
  return (
    <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm dark:bg-[#1e1e1e] dark:border-[#333] w-full md:col-span-2 transition-colors duration-300">
      <h2 className="text-2xl font-bold text-[#800020] border-b-2 border-[#800020] pb-1 mb-4 inline-block">
        Навчальні проєкти
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        <div className="p-4 bg-[#fdfdfd] border border-gray-100 rounded-lg dark:bg-[#252525] dark:border-[#333] transition-colors duration-300">
          <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Розробка скриптів на Python</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Створення автоматизованих скриптів для обробки даних та вирішення прикладних математичних задач.
          </p>
        </div>
        <div className="p-4 bg-[#fdfdfd] border border-gray-100 rounded-lg dark:bg-[#252525] dark:border-[#333] transition-colors duration-300">
          <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Проєктування баз даних</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Розробка структури реляційної бази даних та її нормалізація в рамках лабораторних робіт.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;