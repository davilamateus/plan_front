import { ChangeEvent, useState } from "react";
import Api from "../../../../axios";
import "./style.scss";

interface type {
    setLink: (e: string) => void;
}

const InputUploadFile = ({ setLink }: type) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            return await Api.post("/todolist/attchaments/upload", formData)
                .then((data) => {
                    setLink(data.data.fileName);
                    setSelectedFile(file || null);
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className="input-upload">
            <div>
                <input
                    type="file"
                    name="file"
                    accept=".pdf, .jpg, .png, doc, jpeg"
                    onChange={handleFileChange}
                />
            </div>
            {selectedFile == null ? (
                <>
                    <img
                        src="./../../../../../icons/upload.svg"
                        alt=""
                    />
                    <span>Add a file type: pdf, doc, jpeg, jpg or png. </span>
                </>
            ) : (
                <>
                    <img
                        src="./../../../../../icons/uploaded.svg"
                        alt=""
                    />
                    <span>File Added.</span>
                </>
            )}
        </div>
    );
};

export default InputUploadFile;
