import React, { useState } from 'react';
import axios from 'axios';

function Image(props) {

    const [ button, setButton ] = useState(false);
    
    const url = props.data.post_url;

    let details;
    const downloadImage = () => {
        details = prompt('Enter Your Name')
        getImage();
        console.log(details);
    }

    // not working
    const getImage = () => {
        axios({
            // getting Cors error
            // url: url + '/download', //original url
            url: 'https://source.unsplash.com/random/500*500', // demo url
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
             const url = window.URL.createObjectURL(new Blob([response.data]));
             const link = document.createElement('a');
             link.href = url;
             link.setAttribute('download', 'file.jpg'); 
             document.body.appendChild(link);
             link.click();
             setButton(true)
          })
          .catch( error => {
               console.log(error)
            }) 
    }
    

    return (
        <div>
        <div className="row">
            <div className="column">
                        {/* <img src={url + '/download'} alt="Responsive" /> */}
                        <span>{props.data.author}</span>
                        <span><button disabled={button} onClick={downloadImage}>Download</button></span>
                        
            </div>   
         </div>  
        </div>
    );
}

export default Image;