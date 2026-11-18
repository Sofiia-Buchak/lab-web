import { useState, useEffect } from 'react';

function ContactForm() {
  // Створюємо змінну стану isOpen, початкове значення - false[cite: 19]
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Встановлюємо isOpen в true через 60000 мс (1 хвилину)[cite: 19]
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    // Очищення таймера, якщо компонент буде розмонтовано
    return () => clearTimeout(timer);
  }, []);

  // Якщо isOpen хибне, нічого не рендериться[cite: 18]
  if (!isOpen) return null;

  return (
    // Темний напівпрозорий фон (оверлей)
    <div className="fixed inset-0 w-full h-full bg-black/50 z-50 flex justify-center items-center backdrop-blur-sm">
      
      {/* Контейнер самого модального вікна */}
      <div className="relative w-[90%] max-w-[450px] bg-white p-8 rounded-xl shadow-2xl animate-fade-in-up dark:bg-[#1e1e1e] dark:border dark:border-[#333]">
        
        {/* Кнопка "Закрити", яка встановлює isOpen назад в false[cite: 19] */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-5 text-2xl text-gray-400 hover:text-[#800020] transition-colors"
          aria-label="Закрити"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-[#800020] mb-2 border-b-2 border-[#800020] inline-block pb-1">
          Зворотний зв'язок
        </h2>
        <p className="text-sm text-gray-500 mb-6 dark:text-gray-400">
          Залиште свої контакти, і я з вами зв'яжуся.
        </p>

        {/* Форма з дією Formspree та методом POST[cite: 19] */}
        <form action="https://formspree.io/f/mljgpyqa" method="POST" className="flex flex-col gap-4">
          
          <div className="flex flex-col text-left">
            <label htmlFor="name" className="mb-1 font-bold text-sm text-gray-800 dark:text-gray-300">Ім'я:</label>
            <input type="text" id="name" name="name" required 
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#800020] dark:bg-[#333] dark:border-[#555] dark:text-white dark:focus:border-[#800020]" />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="email" className="mb-1 font-bold text-sm text-gray-800 dark:text-gray-300">Email:</label>
            <input type="email" id="email" name="email" required 
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#800020] dark:bg-[#333] dark:border-[#555] dark:text-white dark:focus:border-[#800020]" />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="phone" className="mb-1 font-bold text-sm text-gray-800 dark:text-gray-300">Номер телефону:</label>
            <input type="tel" id="phone" name="phone" 
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#800020] dark:bg-[#333] dark:border-[#555] dark:text-white dark:focus:border-[#800020]" />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="message" className="mb-1 font-bold text-sm text-gray-800 dark:text-gray-300">Повідомлення:</label>
            <textarea id="message" name="message" rows="4" required 
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#800020] dark:bg-[#333] dark:border-[#555] dark:text-white dark:focus:border-[#800020]" />
          </div>

          <button type="submit" 
            className="w-full mt-2 py-3 bg-[#800020] text-white font-bold rounded-md hover:bg-[#5a0016] transition-colors">
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;