const getSleepBookInfoTemplate = (data, count) => {
    const {
        hotel,
        country,
    } = data;

    return (
        `<div class="main-section-bottom-content-item sleep-content-bottom-book-item">
                <p class="main-section-bottom-content-item-suptitle sleep-content-bottom-book-item-suptitle">
                    Resort
                </p>
                <div class="sleep-content-bottom-book-item-title">
                    <p class="main-section-bottom-content-item-title">${hotel}</p>
                    <p class="main-section-bottom-content-item-title">${country}</p>
                </div>
            </div>
            <div class="main-section-bottom-content-item sleep-content-bottom-book-item sleep-content-bottom-book-item-nights">
                <p class="main-section-bottom-content-item-suptitle sleep-content-bottom-book-item-suptitle">
                    # of Nights
                </p>
                <div class="main-section-bottom-content-item-title sleep-content-bottom-book-item-title">
                    <span id="sleep-book-nights">0</span> Nights
                    <p class="sleep-content-bottom-book-item-title-control" id="sleep-book-item-title-control-night"
                        data-count-active-slide="${count}">
                        <i class="fa fa-plus sleep-content-bottom-book-item-title-control-plus" aria-hidden="true" data-option="night"
                            data-action="increase"></i>
                        <i class="fa fa-minus sleep-content-bottom-book-item-title-control-minus" aria-hidden="true" data-option="night"
                            data-action="decrease"></i>
                    </p>
                </div>
            </div>
            <div class="main-section-bottom-content-item sleep-content-bottom-book-item sleep-content-bottom-book-item-guests">
                <p class="main-section-bottom-content-item-suptitle sleep-content-bottom-book-item-suptitle">
                    # of Guests
                </p>
                <div class="main-section-bottom-content-item-title sleep-content-bottom-book-item-title">
                    <span id="sleep-book-guests">0</span> Guests
                    <p class="sleep-content-bottom-book-item-title-control" id="sleep-book-item-title-control-guest"
                        data-count-active-slide="${count}">
                        <i class="fa fa-plus sleep-content-bottom-book-item-title-control-plus" aria-hidden="true" data-option="guests"
                            data-action="increase"></i>
                        <i class="fa fa-minus sleep-content-bottom-book-item-title-control-minus" aria-hidden="true" data-option="guests"
                            data-action="decrease"></i>
                    </p>
                </div>
            </div>
            <div class="main-section-bottom-content-item sleep-content-bottom-book-item sleep-content-bottom-book-item-price">
                <p class="main-section-bottom-content-item-suptitle sleep-content-bottom-book-item-suptitle">
                    Pricing
                </p>
                <p class="main-section-bottom-content-item-title sleep-content-bottom-book-item-title">
                    $<span id="sleep-book-price">0</span> USD
                </p>
            </div>`
    );
};

export default getSleepBookInfoTemplate;
