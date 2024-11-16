import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "./ScrollSmoother.min";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    smooth: .5,
    effects: true,
});

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

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-me__foto",
        start: "top 90%",
        end: "bottom 90%",
        scrub: 1,
        toggleActions: "play none none none"
    }
});

timeline
    .fromTo(".about-me__info",
        { opacity: 0, y: 50 },  // Начальное состояние
        { opacity: 1, y: 0 }    // Конечное состояние
    )
    .fromTo(".about-me__foto",
        { opacity: 0, y: 50 },  // Начальное состояние
        { opacity: 1, y: 0 },   // Конечное состояние
        "<"                     // Одновременный запуск
    );

const introTl = gsap.timeline();
const introTlSettings = { scale: 1.2, duration: 1.1, ease: "power1.out" };

introTl
    .from(".h1", introTlSettings)
    .from(".intro__role", introTlSettings, "<");

