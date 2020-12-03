const getSurfMapPointDescriptionTemplate = (data) => {
    const {
        title,
        country,
        wavecount,
        tideCount,
        windCount,
    } = data;

    return (
        `<div class="surf-content-top-map-point-description-location">
            <h3 class="surf-content-top-map-point-description-location-title">
                ${title}
            </h3>
            <p class="surf-content-top-map-point-description-location-subtitle">
                ${country}
            </p>
        </div>
        <div class="surf-content-top-map-point-description-weather">
            <div class="surf-content-top-map-point-description-weather-wave
                    surf-content-top-map-point-description-weather-item">
                <p class="surf-content-top-map-point-description-weather-wave-count
                        surf-content-top-map-point-description-weather-count">
                    ${wavecount.length === 2 ? `${wavecount[0]} - ${wavecount[1]}` : wavecount}
                </p>
                <p class="surf-content-top-map-point-description-weather-wave-subtext
                        surf-content-top-map-point-description-weather-subtext">
                    Surf (FT)
                </p>
            </div>
            <div class="surf-content-top-map-point-description-weather-tide
                    surf-content-top-map-point-description-weather-item">
                <p class="surf-content-top-map-point-description-weather-tide-count
                        surf-content-top-map-point-description-weather-count">
                    ${tideCount}
                </p>
                <p class="surf-content-top-map-point-description-weather-tide-subtext
                        surf-content-top-map-point-description-weather-subtext">
                    Tide (FT)
                </p>
            </div>
            <div class="surf-content-top-map-point-description-weather-wind
                    surf-content-top-map-point-description-weather-item">
                <p class="surf-content-top-map-point-description-weather-wind-count
                        surf-content-top-map-point-description-weather-count">
                    ${windCount} SE
                </p>
                <p class="surf-content-top-map-point-description-weather-wind-subtext
                        surf-content-top-map-point-description-weather-subtext">
                    Wind (KTS)
                </p>
            </div>
        </div>`
    );
};

export default getSurfMapPointDescriptionTemplate;
