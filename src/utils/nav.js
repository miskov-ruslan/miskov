const Nav = (navItems, menu, menuBtn) => {
    const menuEl = document.querySelector(menu)
    function navSwitch() {
        const navNodes = document.querySelectorAll(navItems)

        if (navNodes) {
            navNodes.forEach(item => {
                item.addEventListener('click', function () {
                    navNodes.forEach(function (item) {
                        item.classList.remove('active')
                        menuClose()
                    })
                    if (item.classList.contains(menuBtn.slice(1))) {
                        menuOpen()
                    }
                    item.classList.add('active')
                })
            })
        }
    }
    function menuOpen() {
        if (menuEl) {
            document.body.style.overflow = 'hidden'
            menuEl.classList.add('active')
        }
    }
    function menuClose() {
        if (menuEl) {
            document.body.style.overflow = ''
            menuEl.classList.remove('active')
        }
    }

    navSwitch()
}

Nav('.b-nav .b-nav__item', '.sidebar--mobile', '.b-nav--menu')
