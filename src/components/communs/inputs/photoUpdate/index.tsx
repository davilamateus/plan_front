import { BASE_URL } from "../../../../axios";
import { useState } from "react";
import { useGetUser } from "../../../../store/hooks/user/useGetUser";
import { userUploadPhoto } from "../../../../hooks/user/useUploadPhoto";
import "./style.scss";
import { useSetUser } from "../../../../store/hooks/user/useSetUser";

const PhotoUpdate = () => {
    const [fileName, setFileName] = useState<string | undefined>(undefined);
    const UseGetUser = useGetUser();
    const UseUploadPhoto = userUploadPhoto();
    const UseSetUser = useSetUser();

    const handleFileChange = (files: FileList | null) => {
        if (files && files.length > 0) {
            const file = files[0];
            UseUploadPhoto(file)
                .then((data) => {
                    setFileName(data.data.result);
                    UseSetUser({ ...UseGetUser, photo: data.data.result });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div
            style={{ backgroundImage: `url(${BASE_URL}imagens/user/${fileName || UseGetUser.photo || "default.jpeg"})` }}
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
