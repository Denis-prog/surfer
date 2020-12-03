import sliderOption from '../option/index';

const getSlideCount = (item, indexSlide, currentSlider, flag) => {
    let currentElement = indexSlide;

    if (item.isReverse || flag) {
        const { dataLength } = sliderOption[currentSlider];
        currentElement = dataLength - currentElement;

        if (currentElement === dataLength) {
            currentElement = 0;
        }
    }

    return currentElement;
};

const renderSlide = (item, indexSlide, currentSlider) => {
    if (!item.template || item.carousel) {
        return;
    }

    const count = getSlideCount(item, indexSlide, currentSlider);
    const slide = item.template(item.data[count], count);
    item.box.insertAdjacentHTML('beforeend', slide);
};

const deletePreviousSlide = (item) => {
    if (!item.template || item.carousel) {
        return;
    }

    while (item.box.firstChild) {
        item.box.removeChild(item.box.firstChild);
    }
};

const changeContentPseudoElement = (item, indexSlide, currentSlider) => {
    if (!item.isPseudoElement) {
        return;
    }

    const count = getSlideCount(item, indexSlide, currentSlider);
    const element = item;
    element.box.dataset.content = item.data[count].pseudoElementContent;
};

const deleteMainDecorClass = (item) => {
    if (!item.mainDecorBox) {
        return;
    }

    item.mainDecorBox.classList.remove(item.className);
};

const changeIndicatorActiveSlider = (item, indexSlide, currentSlider) => {
    if (!item.className || item.mainDecorBox) {
        return;
    }

    const count = getSlideCount(item, indexSlide, currentSlider);

    if (!item.box.length) {
        return;
    }

    item.box.forEach((element, index) => {
        if (count === index) {
            element.classList.add(item.className);
        } else {
            element.classList.remove(item.className);
        }
    });
};

const setValueVariableCss = (item, indexSlide, currentAction, currentSlider) => {
    if (!item.variableCss) {
        return;
    }

    const variable = item.variableCss;
    const element = typeof item.box === 'string'
        ? document.querySelectorAll(item.box)
        : item.box;

    const count = getSlideCount(item, indexSlide, currentSlider);

    if (item.keyFrameAnimation) {
        const [animationOne, animationTwo] = item.keyFrameAnimation;

        if (element.style.animationName === animationOne
            || !element.style.animationName) {
            element.style.animationName = animationTwo;
        } else {
            element.style.animationName = animationOne;
        }
    }

    if (item.box.length) {
        item.data[count].forEach((dataArr, index) => {
            dataArr.variable.forEach((dataItem, indexItem) => {
                element[index].style.setProperty(variable[index][indexItem], dataItem);
            });
        });
    } else {
        const values = item.data[count];

        values.forEach((value, index) => {
            element.style.setProperty(variable[index], value);
        });
    }
};

const moveSliderCarousel = (item, currentIndex, currentSlider, currentAction) => {
    if (!item.carousel) {
        return;
    }

    item.box.firstElementChild.classList.remove(item.className);
    const totalAmountSlides = item.totalAmountSlides(item.nameSlider, item.box);
    const widthOneSlide = +(100 / totalAmountSlides.toFixed(3));
    const step = widthOneSlide / 40; // влияет на скорость движения слайда
    let positionMove = 0;
    let currentPosition = 0;
    let indexItem;
    let indexSlide = currentIndex;

    if (currentAction === 'previousSlide') {
        indexSlide = item.data.length - 1 - indexSlide + totalAmountSlides;
    }

    if (indexSlide < 0) {
        const check = indexSlide % item.data.length;
        indexItem = check === 0
            ? 0
            : totalAmountSlides + check;
    } else {
        indexItem = indexSlide % item.data.length;
    }

    const isReverse = currentAction !== 'previousSlide';
    const indexSlideData = getSlideCount(item, indexItem, currentSlider, isReverse);

    if (currentAction === 'previousSlide') {
        item.box.insertAdjacentHTML('beforeEnd', item.template(item.data[indexSlideData], totalAmountSlides, totalAmountSlides));
    } else {
        item.box.insertAdjacentHTML('afterBegin', item.template(item.data[indexSlideData], -1, totalAmountSlides));
    }

    const slides = document.querySelectorAll('[data-slider-item]');

    const requestAnimationMove = () => {
        if (currentAction === 'previousSlide') {
            positionMove = -step;
        } else {
            positionMove = step;
        }

        currentPosition += step;

        slides.forEach((element) => {
            const currentElement = element;
            currentElement.style.left = `${parseFloat(currentElement.style.left) + positionMove}%`;
        });

        const requestId = requestAnimationFrame(requestAnimationMove);

        if (currentPosition >= widthOneSlide) {
            cancelAnimationFrame(requestId);
            if (currentAction === 'previousSlide') {
                item.box.firstElementChild.remove();
            } else {
                item.box.lastElementChild.remove();
            }

            item.box.firstElementChild.classList.add(item.className);
        }
    };
    requestAnimationFrame(requestAnimationMove);
};

export {
    renderSlide,
    deletePreviousSlide,
    changeContentPseudoElement,
    changeIndicatorActiveSlider,
    deleteMainDecorClass,
    getSlideCount,
    setValueVariableCss,
    moveSliderCarousel,
};
