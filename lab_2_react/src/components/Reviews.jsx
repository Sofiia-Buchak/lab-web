import { useState, useEffect } from 'react';

function Reviews() {
  // Використовуємо useState для збереження списку коментарів
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect для отримання даних при завантаженні компонента
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/3/comments')
      .then(response => response.json())
      .then(data => {
        setComments(data); // Зберігаємо отримані дані у стан
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Помилка:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(128,0,32,0.1)] dark:bg-[#1e1e1e] dark:border-[#333] w-full md:col-span-2">
      <h2 className="text-2xl font-bold text-[#800020] border-b-2 border-[#800020] pb-1 mb-4 inline-block">
        Відгуки роботодавців
      </h2>

      <div className="flex flex-col gap-4 mt-4">
        {isLoading ? (
          <p className="text-gray-500">Завантаження відгуків...</p>
        ) : (
          comments.map(comment => (
            <div 
              key={comment.id} 
              className="p-4 bg-[#fdfdfd] border border-[#eaeaea] rounded-lg border-l-4 border-l-[#800020] dark:bg-[#1e1e1e] dark:border-y-[#333] dark:border-r-[#333] transition-colors"
            >
              <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200 capitalize">
                {comment.name}
              </h3>
              <a 
                href={`mailto:${comment.email}`} 
                className="text-sm text-gray-500 hover:text-[#800020] dark:text-gray-400 dark:hover:text-[#800020] inline-block mb-2"
              >
                {comment.email}
              </a>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                "{comment.body}"
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Reviews;