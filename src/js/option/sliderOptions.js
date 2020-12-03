import { domElements, CONSTANTS, getDataSelect } from '../shared/index';
import {
    getHeaderSlideTemplate,
    getSurfSlideLoctionTemplate,
    getSurfMapPointDescriptionTemplate,
    getTravelLocationTemplate,
    getTravelTransportTemplate,
    getTravelTransportInfoTemplate,
    getSleepLocationTemplate,
    getSleepRaitingTemplate,
    getSleepBookInfoTemplate,
    getShopOrdersTemplate,
    getSurfCarouselSlideTemplate,
} from '../views/index';
import getTotalAmountSlides from '../adaptiveHandler/index';

const {
    headerSliders,
} = CONSTANTS.header;
const {
    surfSliders,
} = CONSTANTS.surf;
const {
    travelSliders,
} = CONSTANTS.travel;
const {
    sleepSliders,
} = CONSTANTS.sleep;
const {
    shopSliders,
} = CONSTANTS.shop;

const headerMapPointPositions = getDataSelect(headerSliders, 'variablePositionPoint');
const headerMapDirectionBgSpritePositions = getDataSelect(headerSliders, 'variableSpriteBgPosition');
const surfMapPointPositions = getDataSelect(surfSliders, 'variablePositionPoint');
const travelTransport = getDataSelect(travelSliders, 'transport');
const travelBgImages = getDataSelect(travelTransport, 'variableBg');
const shopFeaturesPositions = getDataSelect(shopSliders, 'features');

const sliderOption = {
    header: {
        countSlide: 0,
        dataLength: headerSliders.length,
        nextSlide() {
            this.countSlide += 1;
        },
        previousSlide() {
            this.countSlide -= 1;
        },
        sliders: [
            {
                template: (data) => getHeaderSlideTemplate(data),
                box: domElements.headerSliderBox,
                className: 'main-active-slider-filter',
                data: headerSliders,
                mainDecorBox: domElements.headerfilterEffectBox,
                isPseudoElement: null,
                isReverse: null,
                carousel: null,
                variableCss: null,
                keyFrameAnimation: null,
            },
            {
                template: null,
                box: domElements.headerSliderControlMap,
                className: null,
                data: headerMapDirectionBgSpritePositions,
                mainDecorBox: null,
                isPseudoElement: null,
                isReverse: null,
                carousel: null,
                variableCss: ['--header-map-direction-bg-sprite-position'],
                keyFrameAnimation: null,
            },
            {
                template: null,
                box: domElements.headerSliderControlMapPoint,
                className: null,
                data: headerMapPointPositions,
                mainDecorBox: null,
                isPseudoElement: null,
                isReverse: null,
                carousel: null,
                variableCss: ['--header-map-point-position-top', '--header-map-point-position-left'],
                keyFrameAnimation: null,
            },
            {
                template: null,
                box: domElements.headerSliderViewIndicationAll,
                className: 'header-indicator-active-slide',
                data: null,
                mainDecorBox: null,
                isPseudoElement: null,
                isReverse: null,
                carousel: null,
                variableCss: null,
                keyFrameAnimation: null,
            },
        ],
    },
    surf: {
        countSlide: 0,
        dataLength: surfSliders.length,
        nextSlide() {
            this.countSlide += 1;
        },
        previousSlide() {
            this.countSlide -= 1;
        },
        sliders: [
            {
                template: (data) => getSurfSlideLoctionTemplate(data),
                box: domElements.surfSliderBox,
                className: 'main-active-slider-filter',
                data: surfSliders,
                mainDecorBox: domElements.surfSliderBoxAfter,
                isPseudoElement: null,
                isReverse: true,
                carousel: null,
                variableCss: null,
                keyFrameAnimation: null,
            },
            {
                template: null,
                box: domElements.surfSliderBoxAfter,
                className: null,
                data: surfSliders,
                mainDecorBox: null,
                isPseudoElement: true,
                isReverse: true,
                carousel: null,
                variableCss: null,
                keyFrameAnimation: null,
            },
            {
                template: (data, index, totalAmountSlides) => getSurfCarouselSlideTemplate(
                    data, index, totalAmountSlides,
                ),
                box: domElements.surfSliderСarouselBox,
                nameSlider: 'surfSliders',
                carousel: true,
                totalAmountSlides: (
                    sliderName,
                    sliderBox,
                ) => getTotalAmountSlides(sliderName, sliderBox),
                className: 'surf-slider-item-active-show',
                data: surfSliders,
                mainDecorBox: null,
                isPseudoElement: null,
                isReverse: false,
                variableCss: null,
                keyFrameAnimation: null,
            },
            {
                template: null,
                box: domElements.surfSliderControlMapPoint,
                className: null,
                data: surfMapPointPositions,
                mainDecorBox: null,
                isPseudoElement: null,
                isReverse: true,
                carousel: null,
                variableCss: ['--surf-map-point-position-top', '--surf-map-point-position-left'],
                keyFrameAnimation: null,
            },
            {
                template: null,
                box: domElements.surfMapPointAll,
                className: 'surf-map-point-hidden',
                data: null,
                mainDecorBox: null,
                isPseudoElement: null,
                isReverse: true,
                carousel: null,
                variableCss: null,
                keyFrameAnimation: null,
            },
            {
                template: (data) => getSurfMapPointDescriptionTemplate(data),
                box: domElements.surfMapPointDescriptionSliderBox,
                className: null,
                data: surfSliders,
                mainDecorBox: null,
                isPseudoElement: null,
                isReverse: true,
                carousel: null,
                variableCss: null,
                keyFrameAnimation: null,
            },
        ],
    },
    travel: {
        countSlide: 0,
        dataLength: travelSliders.length,
        nextSlide() {
            this.countSlide += 1;
        },
        previousSlide() {
            this.countSlide -= 1;
        },
        sliders: [
            {
                template: (data) => getTravelLocationTemplate(data),
                box: domElements.travelSliderBoxLocation,
                className: 'main-active-slider-filter',
                data: travelSliders,
                mainDecorBox: domElements.travelMainActiveSliderDecor,
                isPseudoElement: null,
                isReverse: null,
                carousel: null,
                variableCss: null,
                keyFrameAnimation: null,
            },
            {
                template: (data) => getTravelTransportTemplate(data),
                box: domElements.travelSliderBoxTransport,
                className: null,
                data: travelTransport,
                mainDecorBox: null,
                isPseudoElement: null,
                isReverse: null,
                carousel: null,
                variableCss: null,
                keyFrameAnimation: null,
            },
            {
                template: (data) => getTravelTransportInfoTemplate(data),
                box: domElements.travelSliderBoxTransportInfo,
                className: null,
                data: travelTransport,
                mainDecorBox: null,
                isPseudoElement: null,
                isReverse: null,
                carousel: null,
                variableCss: null,
                keyFrameAnimation: null,
            },
            {
                template: null,
                box: domElements.travelSliderViewLocationBg,
                className: null,
                data: travelBgImages,
                mainDecorBox: null,
                isPseudoElement: null,
                isReverse: null,
                carousel: null,
                variableCss: ['--path'],
                keyFrameAnimation: ['moveAirplanOne', 'moveAirplanTwo'],
            },
        ],
    },
    sleep: {
        countSlide: 0,
        dataLength: sleepSliders.length,
        nextSlide() {
            this.countSlide += 1;
        },
        previousSlide() {
            this.countSlide -= 1;
        },
        sliders: [
            {
                template: (data) => getSleepLocationTemplate(data),
                box: domElements.sleepSliderBoxLocation,
                className: 'main-active-slider-filter',
                data: sleepSliders,
                mainDecorBox: domElements.sleepMainActiveSliderDecor,
                isPseudoElement: null,
                isReverse: null,
                carousel: null,
                variableCss: null,
                keyFrameAnimation: null,
            },
            {
                template: (data) => getSleepRaitingTemplate(data),
                box: domElements.sleepSliderBoxRaiting,
                className: null,
                data: sleepSliders,
                mainDecorBox: null,
                isPseudoElement: null,
                isReverse: null,
                carousel: null,
                variableCss: null,
                keyFrameAnimation: null,
            },
            {
                template: (data, count) => getSleepBookInfoTemplate(data, count),
                box: domElements.sleepSliderBoxBookInfo,
                className: null,
                data: sleepSliders,
                mainDecorBox: null,
                isPseudoElement: null,
                isReverse: null,
                carousel: null,
                variableCss: null,
                keyFrameAnimation: null,
            },
        ],
    },
    shop: {
        countSlide: 0,
        dataLength: shopSliders.length,
        nextSlide() {
            this.countSlide += 1;
        },
        previousSlide() {
            this.countSlide -= 1;
        },
        sliders: [
            {
                template: (data) => getShopOrdersTemplate(data),
                box: domElements.shopSliderOrderBox,
                className: 'main-active-slider-filter',
                data: shopSliders,
                mainDecorBox: domElements.shopMainActiveSliderDecor,
                isPseudoElement: null,
                isReverse: null,
                carousel: null,
                variableCss: null,
                keyFrameAnimation: null,
            },
            {
                template: null,
                box: '[data-feature]',
                className: null,
                data: shopFeaturesPositions,
                mainDecorBox: null,
                isPseudoElement: null,
                isReverse: null,
                carousel: null,
                variableCss: [
                    ['--shop-content-feature-1-position-top',
                        '--shop-content-feature-1-position-left'],
                    ['--shop-content-feature-2-position-top',
                        '--shop-content-feature-2-position-left'],
                    ['--shop-content-feature-3-position-top',
                        '--shop-content-feature-3-position-left'],
                ],
                keyFrameAnimation: null,
            },
        ],
    },
};

export default sliderOption;
