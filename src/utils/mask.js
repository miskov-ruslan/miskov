import IMask from 'imask';

export default function setMask() {
    const input = document.querySelectorAll('input')

    input.forEach(item => {
        const maskValue = item.dataset.mask


        if (maskValue) {
            IMask(
                item,
                {
                    mask: maskValue === 'number' ? Number : maskValue,
                }
            )
        }
    });
}

setMask()
