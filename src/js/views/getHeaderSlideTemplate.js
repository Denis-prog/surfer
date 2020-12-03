const getHeaderSlideTemplate = (data) => {
    const {
        suptitle,
        title,
        subtitle,
        text,
    } = data;

    return (
        `<div>
        <p class="header-slider-view-content-suptitle main-text-right-headline">${suptitle}</p>
        <h2 class="header-slider-view-content-title">${title}</h2>
        <p class="header-slider-view-content-subtitle main-text-right-headline">${subtitle}</p>
        <p class="header-slider-view-content-subtext main-text-head">${text}</p>
    </div>`
    );
};

export default getHeaderSlideTemplate;
