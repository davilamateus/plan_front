export type ITrip = {
    currentCity: string;
    currentState: string;
    currentCountry: string;
    currentCountrySlug: string;
    currentCurrency: string;

    tripCity: string;
    tripState: string | undefined;
    tripCountry: string;
    tripCountrySlug: string;
    tripCurrency: string;
    tripLon: string;
    tripLat: string;

    when: number;
    loaded: boolean;
};

export type ITripContext = {
    state: ITrip;
    editTrip: (trip: ITrip) => void;
};

export type ITripAction = { type: "set"; payload: ITrip };
