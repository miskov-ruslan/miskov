import VanillaTilt from "vanilla-tilt";

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 25,           // Максимальный угол наклона
    speed: 600,        // Скорость анимации
    glare: false,       // Добавляет блик
    "max-glare": 0.5,  // Максимальная интенсивность блика
});
