import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

const MusicFileUpload: React.FC<{username: string}> = ({username}) => {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file || !username) {
            setMessage('Please provide both a file and a username.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('username', username); // Adapt

        try {
            // Adapt
            const response = await axios.post('https://xt77fzczff.execute-api.us-east-1.amazonaws.com/dev/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage(response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
            setMessage('Error uploading file.');
        }
    };

    return (
        <div>
            {/*<h1>Music File Upload</h1>*/}
            <input
                type="file" accept={"audio/mp3, audio/mp4"}
                onChange={handleFileChange}
            />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default MusicFileUpload;