function About() {
  return (
    <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 md:col-span-2">
      <h2 className="text-2xl font-bold text-[#800020] mb-4 border-b-2 border-[#800020] pb-2 inline-block">Про мене</h2>
      <p className="mb-3 text-gray-600 leading-relaxed">
        Я студентка другого курсу Національного університету "Львівська політехніка", де активно вивчаю кібербезпеку.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Цікавлюся програмуванням та проєктуванням баз даних. Відкрита до нових знань і готова застосовувати свої навички на практиці.
      </p>
    </section>
  );
}

export default About;