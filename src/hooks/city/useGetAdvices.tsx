import Api from "../../axios";

export const useGetAdvices = () => {

    let token = localStorage.getItem('token') || sessionStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return async (lat: string, lon: string, category: string = '10000') => {
        return await Api.get(`/cities/advices?lat=${lat}&lon=${lon}&category=${category}`, config)

    }
}

export const useGetAdvicesImg = () => {

    let token = localStorage.getItem('token') || sessionStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return async (id: string) => {
        return await Api.get(`/cities/advices/img?id=${id}`, config)

    }
}

