import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = document.querySelectorAll(".examples__item-img img");

images.forEach((image) => {
    // Анимация при наведении
    image.addEventListener("mouseenter", () => {
        const tl = gsap.timeline();
        tl.to(image, {
            scale: 1.05,               // Увеличение на 5%
            duration: 0.7,            // Длительность анимации масштаба
            ease: "power3.out",       // Плавный эффект при увеличении
        }).to(image, {
            filter: "grayscale(0%)",  // Убираем черно-белый фильтр
            duration: 0.3,            // Отдельная длительность для фильтра
            ease: "power3.out"
        }, 0); // Второй параметр "0" для одновременного запуска с масштабом
    });

    // Анимация при убирании курсора
    image.addEventListener("mouseleave", () => {
        const tl = gsap.timeline();
        tl.to(image, {
            scale: 1,                   // Возвращаем к исходному размеру
            duration: 0.7,              // Длительность анимации масштаба
            ease: "power3.inOut",
        }).to(image, {
            filter: "grayscale(100%)",  // Возвращаем черно-белый фильтр
            duration: 0.3,                // Отдельная длительность для фильтра
            ease: "power3.inOut"
        }, 0); // Одновременный запуск
    });
});

const stackItems = document.querySelectorAll(".technology-stack__item");

stackItems.forEach((item, index) => {
    gsap.from(item, {
        borderColor: 'transparent',
        duration: 0.3,             // Длительность анимации
        ease: "power2.out",      // Плавное затухание
        delay: index * 0.1,      // Задержка, чтобы эффект срабатывал последовательно
        scrollTrigger: {
            trigger: item,         // Запускаем для каждой карточки
            start: "top 80%",      // Анимация начнётся, когда верх карточки достигнет 80% от высоты окна
            toggleActions: "play none none reverse", // Повтор анимации при скролле назад
        }
    });
});
