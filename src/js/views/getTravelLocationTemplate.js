const getTravelLocationTemplate = (data) => {
    const {
        city,
        country,
    } = data;

    return (
        `<p class="main-text-left-headline-adaptive main-text-right-headline-adaptive main-text-left-headline main-text-right-headline">Current location</p>
        <p class="travel-content-top-location-text main-text-right-head">${city}<span> | </span>${country}</p>`
    );
};

export default getTravelLocationTemplate;
