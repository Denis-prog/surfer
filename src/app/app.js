import {
    setMainActiveSliderEffect,
    eventSlider,
    eventCalcPrice,
    eventClearCalcCounts,
    clearInputCheckbox,
    showEnlargedPhoto,
    hiddenEnlargedPhoto,
    showMainMenu,
    showModalWrapper,
    showScrollBody,
    hiddenMainMenu,
    hiddenModalWrapper,
    hiddenScrollBody,
} from '../js/eventHadler/index';
import {
    setCurrentDate,
    renderSlideCarousel,
} from '../js/servises/index';
import { domElements, CONSTANTS } from '../js/shared/index';
import getTotalAmountSlides from '../js/adaptiveHandler/index';
import EventObserver from '../js/observer/observer';

const { surfSliders } = CONSTANTS.surf;

const init = () => {
    EventObserver.subscribe((count) => {
        renderSlideCarousel(surfSliders,
            count, 'surf-slider-item-active-show', domElements.surfSliderСarouselBox); // второй параметр количество слайдов в карусели
    });

    getTotalAmountSlides(
        'surfSliders',
        domElements.surfSliderСarouselBox,
    );

    setCurrentDate();

    document.addEventListener('click', (event) => {
        setMainActiveSliderEffect(event);
        setTimeout(eventSlider, 100, event);
        eventClearCalcCounts(event);
        eventCalcPrice(event);
    });
    domElements.headerMenuButton.addEventListener('click', () => {
        if (domElements.headerMenuCheckbox.checked) {
            hiddenMainMenu();
            showScrollBody();
            hiddenModalWrapper();
        } else {
            showMainMenu();
            hiddenScrollBody();
            showModalWrapper();
        }
    });
    domElements.modalPopup.addEventListener('click', () => {
        domElements.headerMenuCheckbox.checked = false;
        hiddenMainMenu();
        showScrollBody();
        hiddenModalWrapper();
        hiddenEnlargedPhoto();
    });
    domElements.headerAside.addEventListener('click', () => {
        domElements.headerMenuCheckbox.checked = false;
        hiddenMainMenu();
        showScrollBody();
        hiddenModalWrapper();
    });
    domElements.buttonScrollPage.addEventListener('click', () => {
        domElements.surfSection.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
    });
    window.addEventListener('resize', () => {
        getTotalAmountSlides(
            'surfSliders',
            domElements.surfSliderСarouselBox,
        );
    });

    domElements.shopSliderOrderBox.addEventListener('change', (event) => {
        clearInputCheckbox(event);
    });

    domElements.shopSliderOrderBox.addEventListener('click', (event) => {
        const target = event.target.closest('button');

        if (target) {
            if (target.matches('#show-order-view-zoom')) {
                showEnlargedPhoto();
                showModalWrapper();
            }
            if (target.matches('#btn-close-view-zoom')) {
                hiddenEnlargedPhoto();
                hiddenModalWrapper();
            }
        }
    });
};

export default init;
