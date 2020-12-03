import { domElements } from '../shared/index';

const handler = {
    header: () => domElements.headerfilterEffectBox,
    surf: () => domElements.surfSliderBoxAfter,
    travel: () => domElements.travelMainActiveSliderDecor,
    sleep: () => domElements.sleepMainActiveSliderDecor,
    shop: () => domElements.shopMainActiveSliderDecor,
};

const setMainActiveSliderEffect = (event) => {
    const target = event.target.closest('button');

    if (target) {
        const dataTarget = target.dataset.slider;

        if (dataTarget
            && Object.prototype.hasOwnProperty.call(handler, dataTarget)) {
            const element = handler[dataTarget]();
            element.classList.add('main-active-slider-filter');
        }
    }
};

export default setMainActiveSliderEffect;
