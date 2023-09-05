import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import './style.scss';
import Api from '../../../../axios';
import { BASE_URL } from '../../../../axios';

interface type {
    setPhoto: Dispatch<SetStateAction<string | undefined>>
    photo: string | undefined;
}


const PhotoUpdate = ({ photo, setPhoto }: type) => {


    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string | undefined>(undefined);


    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setSelectedFile(file || null);
        handleUpload()
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            return;
        }

        try {
            const formData = new FormData();
            formData.append('file', selectedFile);

            const response = await Api.post<{ fileName: string }>(
                '/user/photo',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )

            setFileName(response.data.fileName);
        } catch (error) {
            console.error('Error sending the file', error);
            alert('Error sending the file. Check console for details.');
        }
    };

    return (
        <div
            style={{ backgroundImage: `url(${BASE_URL}imagens/user/${fileName || photo || 'default.png'})` }}
            className='photo-update-component'
        >
            <img src="./../../../../../icons/imagem.svg" alt="" />
            <input type="file" accept="image/jpeg, image/png" onChange={handleFileChange} />

        </div>
    )
}

export default PhotoUpdate;

