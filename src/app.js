import '@/scss/main.scss'
import '@/utils/icons.js'
import '@/utils/wow.js'
import '@/utils/particles.js'
import '@/utils/tilt.js'
import '@/utils/rellax.js'

import { initVanta, destroyVanta } from '@/utils/vanta.js';


initVanta('.header');
document.addEventListener('DOMContentLoaded', () => {
    initVanta('.header');

    window.addEventListener('resize', () => {
        destroyVanta();
        initVanta('.header');
    });
});


