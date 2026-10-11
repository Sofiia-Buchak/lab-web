function Education() {
  return (
    <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <h2 className="text-2xl font-bold text-[#800020] mb-4 border-b-2 border-[#800020] pb-2 inline-block">Освіта</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li className="font-semibold text-gray-800">Національний університет "Львівська політехніка" <span className="font-normal text-gray-500">(2025 - 2029)</span></li>
        <li className="ml-4">Освітній ступінь: Бакалавр</li>
        <li className="ml-4">Спеціальність: Кібербезпека</li>
      </ul>
    </section>
  );
}

export default Education;