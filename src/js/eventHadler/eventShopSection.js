import { domElements } from '../shared/index';

const clearInputCheckbox = (event) => {
    const { target } = event;

    if (target.matches('input[type="checkbox"]') && target.checked) {
        const checkboxAll = domElements.shopSliderOrderBox.querySelectorAll('[data-feature-checkbox]');

        checkboxAll.forEach((element) => {
            const currentElement = element;
            currentElement.checked = false;
        });

        target.checked = !target.checked;
    }
};

const showEnlargedPhoto = () => {
    domElements.shopSliderOrderBox
        .querySelector('#shop-content-inner-order-zoom')
        .classList.add('shop-display-block');
};

const hiddenEnlargedPhoto = () => {
    domElements.shopSliderOrderBox
        .querySelector('#shop-content-inner-order-zoom')
        .classList.remove('shop-display-block');
};

export {
    clearInputCheckbox,
    showEnlargedPhoto,
    hiddenEnlargedPhoto,
};
