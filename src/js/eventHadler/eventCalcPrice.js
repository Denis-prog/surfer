import { setResultInDocument, setCurrentCountInDocument } from '../servises/index';
import { CONSTANTS, getDataSelect } from '../shared/index';

const {
    sleepSliders,
} = CONSTANTS.sleep;
const prices = getDataSelect(sleepSliders, 'price');
const { night, guests } = CONSTANTS.calcCounter;

const eventCalcPrice = (event) => {
    const { target } = event;

    if (target) {
        const { action, option } = target.dataset;

        if (action
            && option
            && Object.prototype.hasOwnProperty.call(CONSTANTS.calcCounter, option)) {
            const countSlide = +target.closest('p').dataset.countActiveSlide;
            const { priceOneNight, ratioForGuests } = prices[countSlide];

            CONSTANTS.calcCounter[option][action]();

            if (night.count >= 1 && guests.count >= 1) {
                const initSumma = night.count * priceOneNight;
                const countGuestsWithOdds = guests.count - 1;
                const result = parseFloat(initSumma
                    + (countGuestsWithOdds * initSumma * ratioForGuests))
                    .toFixed(2);
                CONSTANTS.calcCounter.setResult(result);
            } else {
                CONSTANTS.calcCounter.setResult(0);
            }

            setResultInDocument();
            setCurrentCountInDocument();
        }
    }
};

const eventClearCalcCounts = (event) => {
    const { target } = event;
    const dataTarget = target.closest('button');

    if (dataTarget) {
        const { slider } = dataTarget.dataset;

        if (slider === 'sleep') {
            CONSTANTS.calcCounter.setResult(0);
            night.clearCount();
            guests.clearCount();
        }
    }
};

export { eventCalcPrice, eventClearCalcCounts };
