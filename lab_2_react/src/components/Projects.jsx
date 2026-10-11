function Projects() {
  return (
    <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 md:col-span-2">
      <h2 className="text-2xl font-bold text-[#800020] mb-4 border-b-2 border-[#800020] pb-2 inline-block">Навчальні проєкти</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-2">Розробка скриптів на Python</h3>
          <p className="text-gray-600 text-sm">Створення автоматизованих скриптів для обробки даних та вирішення прикладних математичних задач.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-2">Проєктування баз даних</h3>
          <p className="text-gray-600 text-sm">Розробка структури реляційної бази даних та її нормалізація в рамках лабораторних робіт.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;