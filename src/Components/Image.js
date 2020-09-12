import React, { useState } from 'react';
import axios from 'axios';

function Image(props) {

    const [ value, setValue ] = useState(false);
    const url = props.data.post_url;

    let details;
    const userInfo = () => {
        details = prompt('Enter Your Name');
        if(details !== null){
            setValue(true);
        }
        console.log(details);
    }

    // not working
    const downloadImage = () => {
    userInfo()
    if(value === true) {  
        axios({
            url: url + '/download', //your url
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
             const url = window.URL.createObjectURL(new Blob([response.data]));
             const link = document.createElement('a');
             link.href = url;
             link.setAttribute('download', 'file.jpg'); //or any other extension
             document.body.appendChild(link);
             link.click();
          })
          .catch( error => {
               console.log(error)
            }) 
    }
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