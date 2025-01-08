import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "./ScrollSmoother.min";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    smooth: 1,
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
        opacity: 0,
        y: 20,
        yoyo: true,
        duration: 0.2,             // Длительность анимации
        ease: "power4.out",      // Плавное затухание
        delay: index / 20,      // Задержка, чтобы эффект срабатывал последовательно
        scrollTrigger: {
            trigger: ".technology-stack__list",         // Запускаем для каждой карточки
            start: "top 80%",      // Анимация начнётся, когда верх карточки достигнет 80% от высоты окна
            toggleActions: "play none none reverse", // Повтор анимации при скролле назад
        }
    });
});

const upTl = gsap.timeline({});
const upTlSettings = { y: 40, opacity: 0, ease: "power2.out" }
const UpElements = [
    ".about-me__info .h2",
    ".about-me__info p",
    ".about-me__info .role-icon",
    ".about-me__foto",
    ".technology-stack .h2",
    ".technology-stack .h3",
    ".technology-stack__list",
    ".examples .h2",
    ".examples__list",
    ".contact .h2",
    ".contact__box"
];

UpElements.forEach((element) => {
    gsap.fromTo(
        element,
        { y: 40, opacity: 0 }, // Начальное состояние
        {
            y: 0,
            opacity: 1, // Конечное состояние с прозрачностью 1
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "top center", // Задаём диапазон анимации
                scrub: 1, // Оставляем scrub для синхронизации с прокруткой
                onUpdate: (self) => {
                    // Принудительно выставляем opacity 1 в конце
                    if (self.progress === 1) {
                        gsap.set(element, { opacity: 1 });
                    }
                }
            }
        }
    );
});


const introTl = gsap.timeline();
const introTlSettings = { scale: 1.2, duration: 1.1, ease: "power1.out" };

introTl
    .from(".h1", introTlSettings)
    .from(".intro__role", introTlSettings, "<");




