import VanillaTilt from "vanilla-tilt";

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 7,             // Максимальный угол наклона
    speed: 600,          // Скорость анимации
    easing: "cubic-bezier(.03,.98,.52,.99)", // Плавный эффект
    glare: false,        // Добавляет блик
    "max-glare": 0.5,    // Максимальная интенсивность блика
});
