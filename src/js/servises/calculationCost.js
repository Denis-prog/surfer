import { CONSTANTS } from '../shared/index';

const { night, guests } = CONSTANTS.calcCounter;

const setCurrentCountInDocument = () => {
    document.getElementById('sleep-book-nights').innerHTML = night.getCount();
    document.getElementById('sleep-book-guests').innerHTML = guests.getCount();
};

const setResultInDocument = () => {
    document.getElementById('sleep-book-price').textContent = CONSTANTS.calcCounter.getResult();
};

export { setResultInDocument, setCurrentCountInDocument };
