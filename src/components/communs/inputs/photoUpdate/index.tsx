import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import './style.scss';
import Api from '../../../../axios';
import { BASE_URL } from '../../../../axios';

interface type {
    setPhoto: Dispatch<SetStateAction<string | undefined>>;
    photo: string | undefined;
}


const PhotoUpdate = ({ photo, setPhoto }: type) => {


    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string | undefined>(undefined);


    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log('mudouuuuu')

            const formData = new FormData();
            formData.append('file', file);

            const response = await Api.post<{ fileName: string }>(
                '/user/photo',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            ).then((data: any) => {
                setPhoto(data.data.fileName);
                setFileName(data.data.fileName);
            })
        }
        setSelectedFile(file || null);

    };

    const handleUpload = async () => {
        if (selectedFile) {

        }
    };

    useEffect(() => {
        if (fileName) {
            setPhoto(fileName);
            console.log('mudou')
        }
    }, [fileName])

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

