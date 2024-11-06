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
        scale: 0.5,
        scaleMobile: 1.00,
        color: 0x4cff9e,
        backgroundColor: 0x191322,
        backgroundAlpha: 0.0,
        points: 10.00,
        maxDistance: 22.00,
        spacing: 16.00
    });
}

export function destroyVanta() {
    if (vanta) {
        vanta.destroy();
        vanta = null;
    }
}

