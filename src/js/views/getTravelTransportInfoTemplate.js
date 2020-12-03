const getTravelTransportInfoTemplate = (data) => {
    const {
        destination,
        distance,
        travelTime,
        pricing,
    } = data;

    return (
        `<div class="main-section-bottom-content-item travel-content-bottom-info-item">
        <p class="main-section-bottom-content-item-suptitle travel-content-bottom-info-item-suptitle">
            Destination
        </p>
        <p class="main-section-bottom-content-item-title travel-content-bottom-info-item-title">
            ${destination}
        </p>
    </div>
    <div class="main-section-bottom-content-item travel-content-bottom-info-item">
        <p class="main-section-bottom-content-item-suptitle travel-content-bottom-info-item-suptitle">
            Distance
        </p>
        <p class="main-section-bottom-content-item-title travel-content-bottom-info-item-title">
            ${distance} Miles
        </p>
    </div>
    <div class="main-section-bottom-content-item travel-content-bottom-info-item">
        <p class="main-section-bottom-content-item-suptitle travel-content-bottom-info-item-suptitle">
            Travel Time
        </p>
        <p class="main-section-bottom-content-item-title travel-content-bottom-info-item-title">
        ${travelTime.length === 1
            ? `${travelTime[0]} Hours`
            : `${travelTime[0]} Hours ${travelTime[1]} Minutes`}
        </p>
    </div>
    <div class="main-section-bottom-content-item travel-content-bottom-info-item">
        <p class="main-section-bottom-content-item-suptitle travel-content-bottom-info-item-suptitle">
            Pricing
        </p>
        <p class="main-section-bottom-content-item-title travel-content-bottom-info-item-title">
            $${pricing} USD
            <span class="travel-content-bottom-info-item-title-subtext">
                Round Trip
            </span>
        </p>
    </div>
    `
    );
};

export default getTravelTransportInfoTemplate;
