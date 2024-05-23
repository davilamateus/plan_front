import Api from "../../../axios";

export const useUploadAttchament = () => {

    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token') ?? localStorage.getItem('token')}` }
    };
    return async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        const res = await Api.post('/todolist/attchaments/upload', formData, config);
        return res;
    }

}


