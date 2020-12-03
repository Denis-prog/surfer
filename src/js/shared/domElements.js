class Dom {
    constructor() {
        this.body = document.getElementById('body');
        this.buttonsControlHeaderSlider = document.getElementById('header-slider-control-button');
        this.headerfilterEffectBox = document.getElementById('headerActiveSlider');
        this.headerSliderBox = document.getElementById('header-slider-view-content');
        this.headerSliderViewIndicationAll = document.querySelectorAll('.header-slider-view-indication-item');
        this.headerSliderControlMap = document.getElementById('header-slider-control-map');
        this.headerSliderControlMapPoint = document.getElementById('header-slider-control-map-point');
        this.headerMenuButton = document.getElementById('header-mobile-container-visuallyHidden-button');
        this.headerAside = document.getElementById('header-aside');
        this.modalPopup = document.getElementById('modal-popup');
        this.headerMenuCheckbox = document.getElementById('headerMenuCheckbox');
        this.headerAsideDateDay = document.getElementById('header-aside-date-day');
        this.headerAsideDateMonth = document.getElementById('header-aside-date-month');
        this.headerAsideDateYear = document.getElementById('header-aside-date-year');
        this.buttonScrollPage = document.querySelector('#button-scroll-page');
        this.surfSection = document.querySelector('[data-surfSection]');
        this.surfSliderBox = document.getElementById('surf-slider-view-content');
        this.surfSliderСarouselBox = document.getElementById('surf-slider-carousel-box');
        this.surfSliderBoxAfter = document.getElementById('surf-slider-box-after');
        this.surfSliderControlButton = document.getElementById('surf-slider-control-button');
        this.surfSliderControlMapPoint = document.getElementById('surf-slider-control-map-point');
        this.surfMapPointAll = document.querySelectorAll('[data-points]');
        this.surfMapPointDescriptionSliderBox = document.getElementById('surf-map-point-description-box');
        this.travelMainActiveSliderDecor = document.getElementById('travelMainActiveSliderDecor');
        this.travelSliderBoxLocation = document.getElementById('travel-slider-view-location');
        this.travelSliderViewLocationBg = document.getElementById('travel-slider-view-location-bg');
        this.travelSliderBoxTransport = document.getElementById('travel-slider-view-transport');
        this.travelSliderBoxTransportInfo = document.getElementById('travel-slider-view-transport-info');
        this.sleepSliderBoxLocation = document.getElementById('sleep-slider-view-location');
        this.sleepMainActiveSliderDecor = document.getElementById('sleepMainActiveSliderDecor');
        this.sleepSliderBoxRaiting = document.getElementById('sleep-slider-view-raiting-box');
        this.sleepSliderBoxBookInfo = document.getElementById('sleep-slider-view-book-info');
        this.sleepBookControlNight = document.getElementById('sleep-book-item-title-control-night');
        this.sleepBookControlGuest = document.getElementById('sleep-book-item-title-control-guest');
        this.shopMainActiveSliderDecor = document.getElementById('shopMainActiveSliderDecor');
        this.shopSliderOrderBox = document.getElementById('shop-slider-order-box');
    }
}

const domElements = new Dom();

export default domElements;
