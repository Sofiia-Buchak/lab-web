function Skills() {
  return (
    <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm dark:bg-[#1e1e1e] dark:border-[#333] w-full transition-colors duration-300">
      <h2 className="text-2xl font-bold text-[#800020] border-b-2 border-[#800020] pb-1 mb-4 inline-block">
        Професійні навички
      </h2>
      <ul className="space-y-3 text-gray-600 dark:text-gray-300">
        <li>
          <strong className="text-gray-800 dark:text-gray-200">Python:</strong> Розуміння синтаксису, написання скриптів, базові алгоритми.
        </li>
        <li>
          <strong className="text-gray-800 dark:text-gray-200">C#:</strong> Основи об'єктно-орієнтованого програмування.
        </li>
        <li>
          <strong className="text-gray-800 dark:text-gray-200">Бази даних:</strong> Проєктування реляційних БД, основи SQL.
        </li>
      </ul>
    </section>
  );
}

export default Skills;