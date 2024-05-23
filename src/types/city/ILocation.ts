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
    }
}
