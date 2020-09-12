import React, { useEffect, useState } from 'react';
import Image from './Image';
import axios from 'axios';

function Gallery(props) {

    const [ images, setImages ] = useState([])

    useEffect(() => {
        getData();
    })

    const getData = () => {
        axios.get('https://picsum.photos/list')
        .then( response => {
            setImages(response.data);
        })
        .catch( error => {
            console.log(error)
        })
    }


    return (
        <div>
            {
            images.map( (data, index) => (
                <Image key={index} data={data} index={index} />
            ))
            }
        </div>
    );
}

export default Gallery;