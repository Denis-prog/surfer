import { domElements } from '../shared/index';

const setCurrentDate = () => {
    const date = new Date().toLocaleDateString();
    const separateData = date.split('.');
    const [day, month, year] = separateData;

    domElements.headerAsideDateDay.textContent = day;
    domElements.headerAsideDateMonth.textContent = month;
    domElements.headerAsideDateYear.textContent = year;
};

export default setCurrentDate;
