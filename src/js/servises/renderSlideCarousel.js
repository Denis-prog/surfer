import getSurfCarouselSlideTemplate from '../views/getSurfCarouselSlideTemplate';

const renderSlideCarousel = (data, totalAmountSlides, className, slideBox) => {
    if (!renderSlideCarousel.cache
        || (renderSlideCarousel.cache && renderSlideCarousel.cache !== totalAmountSlides)) {
        let fragment = '';
        const box = slideBox;

        while (box.firstChild) {
            box.firstChild.remove();
        }

        for (let i = 0; i < totalAmountSlides; i += 1) {
            fragment += getSurfCarouselSlideTemplate(data[i], i, totalAmountSlides, i === 0 ? className : '');
        }

        slideBox.insertAdjacentHTML('beforeend', fragment);
        renderSlideCarousel.cache = totalAmountSlides;
    }
    renderSlideCarousel.cache = totalAmountSlides;
};

export default renderSlideCarousel;
