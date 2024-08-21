import Api from "../axios";

export const useGetWeather = () => {
    return async (city: string, countrySlug: string) => {
        return await Api.get(`/cities/weather?city=${city}&country=${countrySlug}`)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export const useGetNoticies = () => {
    return async (countrySlug: string, category?: string, page?: string) => {
        return await Api.get(
            `/cities/noticies?country=${countrySlug}${category ? `&category=${category}` : ""}${page ? `&page=${page}` : ""}`
        )
            .then((data) => {
                return data.data.results;
            })
            .catch((error) => console.log(error));
    };
};

export const useGetCityAutocomplete = () => {
    return async (query: string) => {
        return await Api.get(`/cities/autocomplete?query=${query}`)
            .then((data) => {
                return data;
            })
            .catch((error) => console.log(error));
    };
};

export const useGetAdvices = () => {
    return async (lat: string, lon: string, category: string) => {
        return await Api.get(`/cities/advices?lat=${lat}&lon=${lon}&category=${category}`)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export const useGetExchange = () => {
    return async (tripCurrency: string, currentCurrency: string) => {
        return await Api.get(`cities/exchange?tripCurrency=${tripCurrency}&currentCurrency=${currentCurrency}`)
            .then((data) => {
                return data;
            })
            .catch((error) => console.log(error));
    };
};

export const useGetRadio = () => {
    return async (country: string) => {
        return await Api.get(`/cities/radios?country=${country}`)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};
