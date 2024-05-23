import Api from "../../axios";

export const useGetExchangeApi = () => {

    let token = localStorage.getItem('token') || sessionStorage.getItem('token');

    return async (tripCurrency: string, currentCurrency: string) => {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        return await Api.get(`cities/exchange?tripCurrency=${tripCurrency}&currentCurrency=${currentCurrency}`, config)

    }


};







