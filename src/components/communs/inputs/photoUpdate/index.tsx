import { BASE_URL } from "../../../../axios";
import { useContext, useState } from "react";
import { userUploadPhoto } from "../../../../requests/user/useUploadPhoto";
import "./style.scss";
import { UseUserContext } from "../../../../context/useUserContext";

const PhotoUpdate = () => {
    const [fileName, setFileName] = useState<string | undefined>(undefined);
    const UseUploadPhoto = userUploadPhoto();

    const user = useContext(UseUserContext);

    const handleFileChange = (files: FileList | null) => {
        if (files && files.length > 0) {
            const file = files[0];
            UseUploadPhoto(file)
                .then((data) => {
                    setFileName(data.data.result);
                    user?.editUser({ ...user.state, photo: data.data.result });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div
            style={{ backgroundImage: `url(${BASE_URL}imagens/user/${fileName || user?.state.photo || "default.jpeg"})` }}
            className="photo-update-component">
            <img
                src="./../../../../../icons/imagem.svg"
                alt=""
            />
            <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={(e) => handleFileChange(e.target.files)}
            />
        </div>
    );
};

export default PhotoUpdate;
