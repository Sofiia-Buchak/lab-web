document.addEventListener("DOMContentLoaded", () => {
    //  Системна інформація (LocalStorage)
    
    // 1. Отримуємо дані
    const currentAgent = navigator.userAgent;
    const currentPlatform = navigator.platform;

    // 2. Зберігаємо в localStorage
    localStorage.setItem("userAgent", currentAgent);
    localStorage.setItem("platform", currentPlatform);

    // 3. Зчитуємо та виводимо у футер
    const savedAgent = localStorage.getItem("userAgent");
    const savedPlatform = localStorage.getItem("platform");
    const footer = document.querySelector("footer");
    
    if (footer) {
        const sysInfoBlock = document.createElement("div");
        sysInfoBlock.classList.add("sys-info-block");

        sysInfoBlock.innerHTML = `
            <p><strong>ОС (Платформа):</strong> ${savedPlatform}</p>
            <p><strong>Браузер:</strong> ${savedAgent}</p>
        `;

        footer.appendChild(sysInfoBlock);
    }

    //  Завантаження відгуків із сервера (Варіант 3)
    const reviewsContainer = document.getElementById("reviews-container");
    
    if (reviewsContainer) {
        // Показуємо текст, поки йде запит
        reviewsContainer.innerHTML = "<p style='color: #888;'>Завантаження відгуків...</p>";
        fetch("https://jsonplaceholder.typicode.com/posts/3/comments")
            .then(response => response.json())
            .then(comments => {
                reviewsContainer.innerHTML = ""; 
                comments.forEach(comment => {
                    const card = document.createElement("div");
                    card.classList.add("review-card");

                    card.innerHTML = `
                        <h3>${comment.name}</h3>
                        <a href="mailto:${comment.email}">${comment.email}</a>
                        <p>"${comment.body}"</p>
                    `;

                    reviewsContainer.appendChild(card);
                });
            })
            .catch(error => {
                console.error("Помилка завантаження:", error);
                reviewsContainer.innerHTML = "<p style='color: red;'>Не вдалося завантажити відгуки.</p>";
            });
    }

    // Модальне вікно (з'являється через 1 хв)
    const modal = document.getElementById("feedback-modal");
    const closeModalBtn = document.getElementById("close-modal");

    setTimeout(() => {
        if (modal) {
            modal.style.display = "flex";
        }
    }, 60000);

    // Логіка закриття вікна (клік на хрестик)
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Логіка закриття вікна (клік поза його межами на темний фон)
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Розумна темна/світла тема 
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    // Функція застосування теми та зміни тексту на кнопці
    function applyTheme(isDark) {
        if (isDark) {
            document.body.classList.add("dark-theme");
            if (themeToggleBtn) themeToggleBtn.textContent = "☀️ Денна тема";
        } else {
            document.body.classList.remove("dark-theme");
            if (themeToggleBtn) themeToggleBtn.textContent = "🌙 Нічна тема";
        }
    }

    // Отримуємо поточну годину з об'єкта 
    const currentHour = new Date().getHours();
    
    // Перевіряємо час: денна тема від 07:00 до 21:00, інакше - нічна
    const isNightTime = currentHour < 7 || currentHour >= 21;
    
    // Встановлюємо тему автоматично при завантаженні сайту
    applyTheme(isNightTime);

    // Додаємо слухача подій для кнопки ручного перемикання
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const isCurrentlyDark = document.body.classList.contains("dark-theme");
            applyTheme(!isCurrentlyDark);
        });
    }
});



