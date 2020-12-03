const getSleepRaitingTemplate = (data) => {
    const { raiting } = data;

    return (`<p class="main-item-section-content-inner-bottom-text-left-headline
            main-text-left-headline
            sleep-content-top-raiting-headline
            main-text-left-headline-adaptive">
            Rating
        </p>
        <div class="main-item-section-content-inner-bottom-left-head
            main-text-left-head sleep-content-top-raiting-text">
            ${raiting}
            <div class="sleep-content-top-raiting-visual
                    main-content-inner-raiting-visual ${raiting}">
            </div>
        </div>`
    );
};

export default getSleepRaitingTemplate;
