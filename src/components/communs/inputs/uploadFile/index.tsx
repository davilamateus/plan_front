import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import './style.scss';
import useUploadAttchament from '../../../../hooks/toDoList/attchament/useUploadAttchament';
import Api from '../../../../axios';

interface type {
    setLink: Dispatch<SetStateAction<string>>;
}

function InputUploadFile({ setLink }: type) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string | undefined>(undefined);

    let token = localStorage.getItem('token') || sessionStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {

            const formData = new FormData();
            formData.append('file', file);

            await Api.post<{ fileName: string }>(
                '/todolist/attchament/upload',
                formData,
                config
            ).then((data: any) => {
                setFileName(data.data.fileName);
            })

        }
        setSelectedFile(file || null);

    };



    useEffect(() => {
        if (fileName) {
            setLink(fileName)
        }
    }, [fileName])

    return (
        <div className='input-upload'>
            <div>
                <input
                    type="file"
                    name='file'
                    accept=".pdf, .jpg, .png, doc, jpeg"
                    onChange={handleFileChange}
                />

            </div>
            {selectedFile == null ?
                <>
                    <img src="./../../../../../icons/upload.svg" alt="" />
                    <span>Add a file type: pdf, doc, jpeg, jpg or png. </span>
                </>
                :
                <>
                    <img src="./../../../../../icons/uploaded.svg" alt="" />
                    <span>File Added.</span>
                </>
            }
        </div>
    );
};

export default InputUploadFile;
