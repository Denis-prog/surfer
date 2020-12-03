import {
    renderSlide,
    deletePreviousSlide,
    changeContentPseudoElement,
    changeIndicatorActiveSlider,
    moveSliderCarousel,
    deleteMainDecorClass,
    setValueVariableCss,
} from '../servises/index';
import sliderOption from '../option/index';

const eventSlider = (event) => {
    const target = event.target.closest('button[data-slider-button]');

    if (target) {
        const currentAction = target.dataset.action;
        const currentSlider = target.dataset.slider;

        sliderOption[currentSlider][currentAction]();
        const {
            countSlide,
            dataLength,
            sliders,
        } = sliderOption[currentSlider];
        let count;

        if (countSlide < 0) {
            const check = countSlide % (dataLength);
            count = check === 0
                ? 0
                : dataLength + check;
        } else {
            count = countSlide % dataLength;
        }

        sliders.forEach((item) => {
            deleteMainDecorClass(item);
            deletePreviousSlide(item);
            renderSlide(item, count, currentSlider);
            changeIndicatorActiveSlider(item, count, currentSlider);
            changeContentPseudoElement(item, count, currentSlider);
            moveSliderCarousel(item, count, currentSlider, currentAction, event);
            setValueVariableCss(item, count, currentAction, currentSlider);
        });
    }
};

export default eventSlider;
