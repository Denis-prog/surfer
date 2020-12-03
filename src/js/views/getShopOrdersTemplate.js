const getSplitPrice = (price) => {
    const splitPrice = (String(price)).split('.');
    if (splitPrice[1] && splitPrice[1].length === 1) {
        splitPrice[1] += '0';
    }

    return splitPrice;
};

const getModifiedPath = (pathDefault, suffix) => {
    const regExp = /.+(?=\.(png|svg|jpg)$)/i;
    const [
        select,
        extension,
    ] = pathDefault.match(regExp);
    const modifiedPath = `${select}${suffix}.${extension}`;

    return modifiedPath;
};

const getShopOrdersTemplate = (data) => {
    const {
        name,
        path,
        raiting,
        price,
        features,
    } = data;
    const splitPrice = getSplitPrice(price);

    let fragment = `<div class="shop-content-inner-order-zoom" id="shop-content-inner-order-zoom">
    <button class="shop-content-inner-order-zoom-close-btn" id="btn-close-view-zoom">
        <i class="fa fa-times shop-content-inner-order-zoom-close-btn-icon" aria-hidden="true"></i>
    </button>
    <img src="${getModifiedPath(path, '_zoom')}" alt="${name}">
    <p class="shop-content-inner-order-info-description-price">
    $${splitPrice[0]} <sup>${splitPrice[1] ? splitPrice[1] : '00'}</sup>
    </p>
    <div class="btn-link shop-slider-btn-link shop-content-inner-order-zoom-btn">
        <a href="#">
            Drop
            <span>
                In <i class="fa fa-arrow-right surf-slider-item-btn-arrow" aria-hidden="true"></i>
            </span>
        </a>
    </div>
</div>
<div class="shop-content-inner-order-info">
    <div class="main-item-section-content-inner-bottom shop-content-inner-order-info-description">
        <p class="main-item-section-content-inner-bottom-text-left-headline
        main-text-left-headline shop-content-inner-order-info-description-headline">
            Style
        </p>
        <div class="main-item-section-content-inner-bottom-left-head
        main-text-left-head shop-content-inner-order-info-description-text">
            ${name}
            <div class="main-content-inner-raiting-visual shop-content-inner-order-info-description-raiting ${raiting}">
            </div>
        </div>
        <p class="shop-content-inner-order-info-description-price">
            $${splitPrice[0]} <sup>${splitPrice[1] ? splitPrice[1] : '00'}</sup>
        </p>
        <div class="btn-link shop-slider-btn-link">
            <a href="#">
                Drop
                <span>
                    In <i class="fa fa-arrow-right surf-slider-item-btn-arrow" aria-hidden="true"></i>
                </span>
            </a>
        </div>
    </div>
</div>
<span class="shop-content-inner-order-view">
    <button class="shop-content-inner-order-view-zoom" id="show-order-view-zoom">
        <i class="fa fa-search-plus" aria-hidden="true"></i>
    </button>
    <picture>
        <source media="(min-width: 601px)" srcset="${path}">
        <source media="(max-width: 450px)" srcset="${getModifiedPath(path, '_small')}">
        <img src="${path}" class="css-adaptive-img" alt="${name}" />
    </picture>`;
    if (features && features.length) {
        features.forEach((item, index) => {
            const count = index + 1;
            fragment += `<div class="shop-content-inner-order-view-feature shop-content-inner-order-view-feature-${count}"
        data-feature>
        <input type="checkbox" class="shop-content-inner-order-view-feature-checkbox" id="feature-${count}" data-feature-checkbox>
        <label for="feature-${count}" class="shop-content-inner-order-view-feature-label">
            <span class="shop-content-inner-order-view-feature-label-rectangle
                    shop-content-inner-order-view-feature-label-rectangle-1">
            </span>
            <span class="shop-content-inner-order-view-feature-label-rectangle
                    shop-content-inner-order-view-feature-label-rectangle-2">
            </span>
        </label>
        <p class="shop-content-inner-order-view-feature-text
                shop-content-inner-order-view-feature-text-${count}">
            ${item.text}
        </p>
    </div>`;
        });
    }

    fragment += '</div>';

    return fragment;
};

export default getShopOrdersTemplate;
