const getSurfCarouselSlideTemplate = (data, index, totalAmountSlides, className) => {
    const width = +(100 / totalAmountSlides).toFixed(3);
    const {
        title,
        country,
        city,
        href,
        img,
    } = data;

    return (
        `<div style="width:${width}%; left:${width * index}%; background-image:url(${img})"
        class="surf-slider-item ${className || ''}" data-slider-item>
        <div class="surf-slider-item-inner surf-slider-item-inner-hidden">
            <h3 class="surf-slider-item-title">${title}</h3>
            <div class="surf-slider-item-middle">
                <p class="surf-slider-item-location">${city}<span>|</span> ${country}</p>
            </div>
            <div class="btn-link surf-slider-item-btn">
                <a href="${href}">
                    View
                    <span>
                        Surf <i class="fa fa-arrow-right surf-slider-item-btn-arrow" aria-hidden="true"></i>
                    </span>
                </a>
            </div>
        </div>
    </div>`
    );
};

export default getSurfCarouselSlideTemplate;
