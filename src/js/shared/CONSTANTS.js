const PATH = {
    mainPathHtmlImg: './assets/img/',
    mainPathCssImg: '../img/',
};

const CONSTANTS = {
    header: {
        headerSliders: [
            {
                suptitle: 'Surf',
                title: 'North Shore',
                subtitle: 'Condition',
                text: 'Radical',
                variablePositionPoint: ['41%', '36%'],
                variableSpriteBgPosition: ['1295px 814px'],
            },
            {
                suptitle: 'Surf',
                title: 'South Shore',
                subtitle: 'Condition',
                text: 'Radical',
                variablePositionPoint: ['59%', '56%'],
                variableSpriteBgPosition: ['1385px 5158px'],
            },
            {
                suptitle: 'Surf',
                title: 'West Shore',
                subtitle: 'Condition',
                text: 'Radical',
                variablePositionPoint: ['91%', '71%'],
                variableSpriteBgPosition: ['1465px 3823px'],
            },
            {
                suptitle: 'Surf',
                title: 'East Shore',
                subtitle: 'Condition',
                text: 'Radical',
                variablePositionPoint: ['94%', '91%'],
                variableSpriteBgPosition: ['1564px 2345px'],
            },
        ],
    },
    surf: {
        surfSliders: [
            {
                title: 'Malibu Beach',
                city: 'California',
                country: 'Usa',
                href: '#',
                img: `${PATH.mainPathHtmlImg}surf/surf-slider-1.png`,
                variablePositionPoint: ['50%', '15%'],
                pseudoElementContent: '34.0501 N -118.2446 W',
                wavecount: [9, 13],
                tideCount: +2.3,
                windCount: 4,
            },
            {
                title: 'Airlie Beach',
                city: 'Queensland',
                country: 'Australia',
                href: '#',
                img: `${PATH.mainPathHtmlImg}surf/surf-slider-2.png`,
                variablePositionPoint: ['82%', '89%'],
                pseudoElementContent: '74.0301 N -156.2342 W',
                wavecount: [12],
                tideCount: +4.1,
                windCount: 6,
            },
            {
                title: 'Cloud Nine',
                city: 'Siargao',
                country: 'Philippines',
                href: '#',
                img: `${PATH.mainPathHtmlImg}surf/surf-slider-3.png`,
                variablePositionPoint: ['61%', '83%'],
                pseudoElementContent: '56.0201 N -76.2343 W',
                wavecount: [4, 8],
                tideCount: +1.6,
                windCount: 2,
            },
            {
                title: 'Vieux Boucau',
                city: 'Hossegor',
                country: 'France',
                href: '#',
                img: `${PATH.mainPathHtmlImg}surf/surf-slider-4.png`,
                variablePositionPoint: ['36%', '45%'],
                pseudoElementContent: '123.0001 N -235.2000 W',
                wavecount: [8],
                tideCount: +4.0,
                windCount: 5,
            },
            {
                title: 'White Beach',
                city: 'Hikkaduwa',
                country: 'Sri Lanka',
                href: '#',
                img: `${PATH.mainPathHtmlImg}surf/surf-slider-1.png`,
                variablePositionPoint: ['85%', '54%'],
                pseudoElementContent: '199.4401 N -299.2342 W',
                wavecount: [3, 6],
                tideCount: +1.4,
                windCount: 3,
            },
            {
                title: 'Mundaka',
                city: 'Tarifa',
                country: 'Spain',
                href: '#',
                img: `${PATH.mainPathHtmlImg}surf/surf-slider-2.png`,
                variablePositionPoint: ['47%', '42%'],
                pseudoElementContent: '103.0301 N -287.2040 W',
                wavecount: [9],
                tideCount: +5.3,
                windCount: 7,
            },
            {
                title: 'Golden sand',
                city: 'Pichilemu',
                country: 'Chile',
                href: '#',
                img: `${PATH.mainPathHtmlImg}surf/surf-slider-3.png`,
                variablePositionPoint: ['80%', '26%'],
                pseudoElementContent: '34.0801 N -100.3040 W',
                wavecount: [7, 9],
                tideCount: +3.3,
                windCount: 5,
            },
            {
                title: 'Red waves',
                city: 'Essaouira',
                country: 'Morocco',
                href: '#',
                img: `${PATH.mainPathHtmlImg}surf/surf-slider-4.png`,
                variablePositionPoint: ['60%', '42%'],
                pseudoElementContent: '123.2011 N -227.2241 W',
                wavecount: [8, 11],
                tideCount: +3.6,
                windCount: 6,
            },
        ],
    },
    travel: {
        travelSliders: [
            {
                country: 'USA',
                city: 'California',
                transport: {
                    type: 'Airlines',
                    name: 'American Airlines',
                    variableBg: [`url(${PATH.mainPathCssImg}travel/travel_airplane_american.png)`],
                    destination: 'California USA',
                    distance: 2.065,
                    travelTime: [9, 10],
                    pricing: 976,
                },
            },
            {
                country: 'Australia',
                city: 'Queensland',
                transport: {
                    type: 'Airlines',
                    name: 'Virgin Airlines',
                    variableBg: [`url(${PATH.mainPathCssImg}travel/travel_airplane_virgin.png)`],
                    destination: 'Queensland Australia',
                    distance: 7054,
                    travelTime: [24, 14],
                    pricing: 2000,
                },
            },
            {
                country: 'Philippines',
                city: 'Siargao',
                transport: {
                    type: 'Airlines',
                    name: 'Philippine Airlines',
                    variableBg: [`url(${PATH.mainPathCssImg}travel/travel_airplane_philippine.png)`],
                    destination: 'Siargao Philippines',
                    distance: 7800,
                    travelTime: [29, 30],
                    pricing: 2700,
                },
            },
            {
                country: 'France',
                city: 'Hossegor',
                transport: {
                    type: 'Airlines',
                    name: 'AirFrance Airlines',
                    variableBg: [`url(${PATH.mainPathCssImg}travel/travel_airplane_airfrance.png)`],
                    destination: 'Hossegor France',
                    distance: 3600,
                    travelTime: [12],
                    pricing: 1450,
                },
            },
            {
                country: 'Sri Lanka',
                city: 'Hikkaduwa',
                transport: {
                    type: 'Airlines',
                    name: 'SriLankan Airlines',
                    variableBg: [`url(${PATH.mainPathCssImg}travel/travel_airplane_srilankan.png)`],
                    destination: 'Hikkaduwa Sri Lanka',
                    distance: 4200,
                    travelTime: [15, 20],
                    pricing: 1850,
                },
            },
            {
                country: 'Spain',
                city: 'Tarifa',
                transport: {
                    type: 'Airlines',
                    name: 'Vueling Airlines',
                    variableBg: [`url(${PATH.mainPathCssImg}travel/travel_airplane_vueling.png)`],
                    destination: 'Tarifa Spain',
                    distance: 3300,
                    travelTime: [10, 20],
                    pricing: 1250,
                },
            },
            {
                country: 'Chile',
                city: 'Pichilemu',
                transport: {
                    type: 'Airlines',
                    name: 'Avianca Airlines',
                    variableBg: [`url(${PATH.mainPathCssImg}travel/travel_airplane_avianca.png)`],
                    destination: 'Pichilemu Chile',
                    distance: 2700,
                    travelTime: [12, 30],
                    pricing: 1450,
                },
            },
            {
                country: 'Morocco',
                city: 'Essaouira',
                transport: {
                    type: 'Airlines',
                    name: 'Indigo Airlines',
                    variableBg: [`url(${PATH.mainPathCssImg}travel/travel_airplane_indigo.png)`],
                    destination: 'Essaouira Morocco',
                    distance: 3300,
                    travelTime: [12, 30],
                    pricing: 1330,
                },
            },
        ],
    },
    sleep: {
        sleepSliders: [
            {
                hotel: 'Malbec On The Creek',
                country: 'USA',
                raiting: 'excellent',
                price: {
                    priceOneNight: 600,
                    ratioForGuests: 0.95,
                },
            },
            {
                hotel: 'Auberge',
                country: 'Australia',
                raiting: 'fair',
                price: {
                    priceOneNight: 300,
                    ratioForGuests: 0.75,
                },
            },
            {
                hotel: 'Manila',
                country: 'Philippines',
                raiting: 'good',
                price: {
                    priceOneNight: 400,
                    ratioForGuests: 0.85,
                },
            },
            {
                hotel: 'Four Seasons',
                country: 'France',
                raiting: 'adequate',
                price: {
                    priceOneNight: 200,
                    ratioForGuests: 0.65,
                },
            },
            {
                hotel: 'The Lake House',
                country: 'Sri Lanka',
                raiting: 'good',
                price: {
                    priceOneNight: 500,
                    ratioForGuests: 0.85,
                },
            },
            {
                hotel: 'Sol Port Cambrils',
                country: 'Spain',
                raiting: 'excellent',
                price: {
                    priceOneNight: 500,
                    ratioForGuests: 0.85,
                },
            },
            {
                hotel: 'Atacama',
                country: 'Chile',
                raiting: 'adequate',
                price: {
                    priceOneNight: 550,
                    ratioForGuests: 0.95,
                },
            },
            {
                hotel: 'Dakhla Club',
                country: 'Morocco',
                raiting: 'fair',
                price: {
                    priceOneNight: 250,
                    ratioForGuests: 0.70,
                },
            },
        ],
    },
    shop: {
        shopSliders: [
            {
                name: 'North Nugget TT Surfboard',
                path: `${PATH.mainPathHtmlImg}shop/shop_surfboard.png`,
                raiting: 'excellent',
                price: 779.99,
                features: [
                    {
                        text: 'Double Concave with Vee Shape low point',
                        variable: ['9%', '15%'],
                    },
                    {
                        text: 'Ergonomic design',
                        variable: ['12%', '50%'],
                    },
                    {
                        text: 'Ergonomic design',
                        variable: ['57%', '0%'],
                    },
                ],
            },
            {
                name: 'Oneill WMS Reactor Swimming Suit',
                path: `${PATH.mainPathHtmlImg}shop/shop_swimming_suit.png`,
                raiting: 'fair',
                price: 1024.50,
                features: [
                    {
                        text: 'Durable materials',
                        variable: ['9%', '6%'],
                    },
                    {
                        text: 'Sealed zipper YKK',
                        variable: ['12%', '40%'],
                    },
                    {
                        text: 'Key pocket',
                        variable: ['57%', '8%'],
                    },
                ],
            },
        ],
    },
    calcCounter: {
        night: {
            count: 0,
            increase() { this.count += 1; },
            decrease() {
                if (this.count === 0) {
                    return;
                }
                this.count -= 1;
            },
            getCount() {
                return this.count;
            },
            clearCount() {
                this.count = 0;
            },
        },
        guests: {
            count: 0,
            increase() { this.count += 1; },
            decrease() {
                if (this.count === 0) {
                    return;
                }
                this.count -= 1;
            },
            getCount() {
                return this.count;
            },
            clearCount() {
                this.count = 0;
            },
        },
        result: 0,
        setResult(result) {
            this.result = result;
        },
        getResult() {
            return this.result;
        },
    },
    breakPointsData: {
        surfSliders: {
            breakPoints: [1200, 900, 600, 300],
            totalAmountSlides: [4, 3, 2, 1],
        },
    },
};

const getDataSelect = (data, key) => data.map((obj) => obj[key]);

export { CONSTANTS, getDataSelect };
