import React from 'react';
import axios from 'axios';

function Image(props) {

    const url = props.data.post_url;

    const userInfo = () => {
        var value = prompt('Enter Your Name');
        console.log(value)
    }

    const downloadImage = () => {
    userInfo()
    axios({
        imageUrl: url,
        method: 'GET',
        responseType: 'blob',
    }).then((response) => {
        const imageurl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = imageurl;
        link.setAttribute('download', 'file.jpg'); //or any other extension
        document.body.appendChild(link);
        link.click();
    })
    .catch( error => {
        console.log(error)
    })
    }

    return (
        <div>
        <div className="row">
            <div className="column">
                        <img src={url + '/download'} alt="Responsive" />
                        <span>{props.data.author}</span><span><button onClick={downloadImage}>Download</button></span>
            </div>   
         </div>  
        </div>
    );
}

export default Image;