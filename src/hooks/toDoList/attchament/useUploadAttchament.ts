import Api from "../../../axios";

const useUploadAttchament = () => {
    return async (formData: File,) => {
        const res = await Api.post('/todolist/attchament/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return res;
    }
}

export default useUploadAttchament;