import Api from "../../axios";

export const useGetNoticies = () => {
    return async (country: string, category?: string, page?: string) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return await Api.get(`/cities/noticies?country=${country}${category ? `&category=${category}` : ''}${page ? `&page=${page}` : ''}`, config)

    }



}

