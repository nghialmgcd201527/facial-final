import { useState } from 'react';
import '../App.css';
import axios from 'axios';
const uuid = require('uuid');

export const Admin = () => {
    const [image, setImage] = useState('');
    const [uploadResultMessage, setUploadResultMessage] = useState('Please upload a register image.');
    const [isAuth, setAuth] = useState(false);
    const [registerImage, setRegisterImage] = useState('');

    function handleImage(e) {
        console.log(e.target.files);
        setImage(e.target.files[0]);
    }

    function handleApi(e) {
        const nameWithExtension = image.name.split('.')[0];
        fetch(`https://od7i9slbdl.execute-api.ap-southeast-1.amazonaws.com/dev/minhnghia-employee-image-storage/${nameWithExtension}.jpeg`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'image/jpeg'
            },
            body: image
        })
    }

    return (
        <div className="App">
            <h2>Admin Upload Register Image</h2>
            <input type="file" name="image" onChange={handleImage} />
            <button onClick={handleApi}>Submit</button>
        </div>
    );
};

