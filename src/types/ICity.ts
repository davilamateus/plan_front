export type IArticle = {
    article_id: string;
    title: string;
    link: string;
    keywords: string[];
    creator: string[];
    video_url: string;
    description: string;
    content: string;
    pubDate: string;
    image_url: string;
    source_id: string;
    source_priority: number;
    source_url: string;
    source_icon: string;
    language: string;
    country: string[];
    category: string[];
    ai_tag?: string;
    sentiment?: string;
    sentiment_stats?: string;
    ai_region?: string;
};

export type ILocation = {
    place_id: string;
    display_name: string;
    lat: string;
    lon: string;
    address: {
        name: string;
        state: string;
        country: string;
        country_code: string;
    };
};

export type IRadio = {
    changeId: string;
    id: string;
    name: string;
    url: string;
    urlResolved: string;
    homepage: string;
    favicon: string;
    country: string;
    countryCode: string;
    state: string;
    votes: number;
    codec: string;
    bitrate: number;
    clickCount: number;
    clickTrend: number;
    hls: boolean;
    lastCheckOk: boolean;
    lastChangeTime: string;
    lastCheckOkTime: string;
    clickTimestamp: string;
    lastLocalCheckTime: string;
    language: string[];
    lastCheckTime: string;
    geoLat: number;
    geoLong: number;
    tags: string[];
};

export type Coord = {
    lon: number;
    lat: number;
};

export type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
};

export type Main = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
};

export type Wind = {
    speed: number;
    deg: number;
};

export type Clouds = {
    all: number;
};

export type Sys = {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
};

export type OpenWeatherMapResponse = {
    coord: Coord;
    weather: Weather[];
    main: Main;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
};
