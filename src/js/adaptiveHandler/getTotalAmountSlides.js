import EventObserver from '../observer/observer';
import { CONSTANTS } from '../shared/index';

const { breakPointsData } = CONSTANTS;

const getTotalAmountSlides = (sliderName, sliderBox) => {
    const currentBreakPoint = sliderBox.offsetWidth;
    const { breakPoints, totalAmountSlides } = breakPointsData[sliderName];
    const index = breakPoints.findIndex((item) => item === currentBreakPoint);

    if (index === -1) {
        return 1;
    }

    EventObserver.broadcast(totalAmountSlides[index]);
    return totalAmountSlides[index];
};

export default getTotalAmountSlides;
