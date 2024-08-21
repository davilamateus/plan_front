import Api from "../../axios";

export const userUploadPhoto = () => {
    return async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        return await Api.post("/user/photo", formData);
    };
};
