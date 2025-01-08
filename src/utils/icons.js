// Получить все SVG-файлы из каталога
const svgContext = require.context('../assets/img/sprites/', false, /\.svg$/);

// Импортировать каждый SVG-файл
svgContext.keys().forEach(svgContext);


