import Api from "../../axios";

const userUploadPhoto = () => {
    return async (formData: File,) => {
        console.log(formData)
        const res = await Api.post('/user/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return res;
    }
}

export default userUploadPhoto;