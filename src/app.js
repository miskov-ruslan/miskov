import '@/scss/main.scss'
import '@/utils/icons.js'

import { initVanta, destroyVanta } from '@/utils/vanta.js';


initVanta('.header');
document.addEventListener('DOMContentLoaded', () => {
    initVanta('.header');

    window.addEventListener('resize', () => {
        destroyVanta();
        initVanta('.header');
    });
});

