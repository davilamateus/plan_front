import Api from "../../axios";

export const userUploadPhoto = () => {
    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token') ?? localStorage.getItem('token')}` }
    };
    return async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        const res = await Api.post('/user/photo', formData, config);
        return res;
    }
};

