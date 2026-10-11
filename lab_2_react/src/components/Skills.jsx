function Skills() {
  return (
    <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <h2 className="text-2xl font-bold text-[#800020] mb-4 border-b-2 border-[#800020] pb-2 inline-block">Професійні навички</h2>
      <ul className="space-y-3 text-gray-600">
        <li><strong className="text-gray-800">Python:</strong> Розуміння синтаксису, написання скриптів, базові алгоритми.</li>
        <li><strong className="text-gray-800">C#:</strong> Основи об'єктно-орієнтованого програмування.</li>
        <li><strong className="text-gray-800">Бази даних:</strong> Проєктування реляційних БД, основи SQL.</li>
      </ul>
    </section>
  );
}

export default Skills;