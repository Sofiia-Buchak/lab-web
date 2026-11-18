function Education() {
  return (
    <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm dark:bg-[#1e1e1e] dark:border-[#333] w-full transition-colors duration-300">
      <h2 className="text-2xl font-bold text-[#800020] border-b-2 border-[#800020] pb-1 mb-4 inline-block">
        Освіта
      </h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>
          <strong className="text-gray-800 dark:text-gray-200">Національний університет "Львівська політехніка"</strong> (2025 - 2029)
        </li>
        <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
          <li>Освітній ступінь: Бакалавр</li>
          <li>Спеціальність: Кібербезпека</li>
        </ul>
      </ul>
    </section>
  );
}

export default Education;