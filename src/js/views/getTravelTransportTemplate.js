const getTravelTransportTemplate = (data) => {
    const {
        type,
        name,
    } = data;

    return (
        `<p class="main-item-section-content-inner-bottom-text-left-headline 
        main-text-left-headline-adaptive
        main-text-left-headline
        travel-content-top-transport-headline">${type}</p>
        <p class="main-item-section-content-inner-bottom-left-head travel-content-top-transport-text main-text-left-head">${name}</p>`
    );
};

export default getTravelTransportTemplate;
