const getSurfSlideLocationTemplate = (data) => {
    const {
        country,
        city,
    } = data;

    return (
        `<p class="main-text-right-headline main-text-left-headline-adaptive main-text-right-headline-adaptive main-text-left-headline">Current location</p>
        <p class="surf-content-top-location-text main-text-right-head">${city}<span> | </span>${country}</p>`
    );
};

export default getSurfSlideLocationTemplate;
