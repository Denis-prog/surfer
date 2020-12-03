import { domElements } from '../shared/index';

const showMainMenu = () => {
    domElements.headerAside.classList.add('show-aside');
};

const hiddenMainMenu = () => {
    domElements.headerAside.classList.remove('show-aside');
};

const showModalWrapper = () => {
    domElements.modalPopup.classList.add('modal-popup');
};

const hiddenModalWrapper = () => {
    domElements.modalPopup.classList.remove('modal-popup');
};

const hiddenScrollBody = () => {
    domElements.body.classList.add('hidden-scroll');
};

const showScrollBody = () => {
    domElements.body.classList.remove('hidden-scroll');
};

export {
    showMainMenu,
    showModalWrapper,
    showScrollBody,
    hiddenMainMenu,
    hiddenModalWrapper,
    hiddenScrollBody,
};
