function About() {
  return (
    <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm dark:bg-[#1e1e1e] dark:border-[#333] w-full md:col-span-2 transition-colors duration-300">
      <h2 className="text-2xl font-bold text-[#800020] border-b-2 border-[#800020] pb-1 mb-4 inline-block">
        Про мене
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Я студентка другого курсу Національного університету "Львівська політехніка", де активно вивчаю кібербезпеку. 
        Цікавлюся програмуванням та проєктуванням баз даних. Відкрита до нових знань і готова застосовувати свої навички на практиці.
      </p>
    </section>
  );
}

export default About;