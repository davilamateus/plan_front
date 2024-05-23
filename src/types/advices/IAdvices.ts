export interface IAdvicesMain {
    fsq_id: string,
    categories: [
        {
            id: number,
            name: string,
            plural_name: string,
            icon: {
                prefix: string,
                suffix: string
            }
        }
    ],
    geocodes: {
        main: {
            latitude: number
            longitude: number
        },

    },
    location: {
        formatted_address: string,
    },
    name: string,
    images: {
        created_at: string
        height: number
        id: string;
        prefix: string;
        suffix: string;
        width: number
    }[]

}

export interface IAdvicesMainImg {





}

