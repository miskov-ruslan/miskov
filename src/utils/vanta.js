import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

let vanta

export function initVanta(selector) {
    const element = document.querySelector(selector);
    if (vanta) return;

    vanta = NET({
        el: element,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x4cff9e,
        backgroundColor: 0x191322
    });
}

export function destroyVanta() {
    if (vanta) {
        vanta.destroy();
        vanta = null;
    }
}

