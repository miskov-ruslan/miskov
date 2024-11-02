const Popup = (popup, openBtn, closeBtn) => {
    const popupEl = document.querySelector(popup)
    const openButton = document.querySelector(openBtn)
    const closeButton = document.querySelector(closeBtn)

    function open(e) {
        if (popupEl) {
            e.stopPropagation()
            popupEl.classList.remove('close')
            popupEl.classList.add('open')
            document.body.style.overflow = 'hidden'
        }
    }
    function close() {
        popupEl.classList.remove('open')
        popupEl.classList.add('close')
        document.body.style.overflow = ''
    }
    function closeOutside(e) {
        if (!e.target.closest('.popup__container') && popupEl.classList.contains('open')) {
            close()
        }
    }
    function keyPress(e) {
        if (e.key === 'Escape') {
            close();
        }
    }

    if (popupEl && openButton && closeButton) {
        openButton.addEventListener('click', open)
        closeButton.addEventListener('click', close)
        document.addEventListener('click', closeOutside);
        document.addEventListener('keydown',  keyPress);
    }
}

Popup('.popup', '.open-popup', '.popup__close')
