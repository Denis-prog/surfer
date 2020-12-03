const getSleepLocationTemplate = (data) => {
    const {
        hotel,
        country,
    } = data;

    return (
        `<p class="main-text-left-headline-adaptive
                main-text-right-headline-adaptive
                main-text-left-headline
                main-text-right-headline">Resorts</p>
         <p class="sleep-content-top-location-text main-text-right-head">${hotel} <span>|</span> ${country}</p>
        `
    );
};

export default getSleepLocationTemplate;
